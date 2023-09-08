'use client';

import Issues from '@/app/_components/Issues';
import { useMilestones } from '@/swr/client/milestones';
import { styled } from '@mui/material';
import Card from '@/components/common/organisms/Card';
import SkeltonCard from '@/components/common/organisms/SkeltonCard';

const StyledContainer = styled('div')`
  max-width: 645px;
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
  border: 1px solid #fff;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 16px 0;
`;

const StyledMilestoneCard = styled('div')`
  align-items: flex-end;
  margin-right: auto;
`;

const Milestones = () => {
  const { data, error } = useMilestones();
  if (error) return <></>;
  return (
    <StyledContainer>
      <StyledMilestoneCard>
        {data ? (
          data.map((item, index) => (
            <>
              <Card
                key={index}
                title={item.title}
                description={item.description}
                state={item.state}
              />
              <Issues milestoneNumber={item.number} />
            </>
          ))
        ) : (
          <SkeltonCard />
        )}
      </StyledMilestoneCard>
    </StyledContainer>
  );
};

export default Milestones;
