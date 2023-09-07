'use client';

import Issues from '@/app/_components/Issues';
import { useMilestones } from '@/swr/client/milestones';
import { styled } from '@mui/material';
import Card from '@/components/common/organisms/Card';
import SkeltonCard from '@/components/common/organisms/SkeltonCard';

const StyledContainer = styled('div')`
  width: 645px;
  min-height: 300px;
  border-radius: 8px;
  border: 1px solid #fff;
  flex-shrink: 0;
  padding: 5px;
  padding-bottom: 300px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
`;

const StyledMilestoneCard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: auto;
`;

const StyledIssueCard = styled('div')`
  width: 300px;
  height: auto;
  margin-left: auto;
`;

const Milestones = () => {
  const { data, error } = useMilestones();
  if (error) return <></>;
  return (
    <StyledContainer>
      <StyledMilestoneCard>
        <div style={{ padding: '16px' }}>
          {data ? (
            data.map((item, index) => (
              <>
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  state={item.state}
                />
                <StyledIssueCard>
                  <Issues milestoneNumber={item.number} />
                </StyledIssueCard>
              </>
            ))
          ) : (
            <SkeltonCard />
          )}
        </div>
      </StyledMilestoneCard>
    </StyledContainer>
  );
};

export default Milestones;
