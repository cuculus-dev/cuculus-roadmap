'use client';

import { useIssues } from '@/swr/client/issues';
import Card from '@/components/common/organisms/Card';
import SkeltonCard from '@/components/common/organisms/SkeltonCard';
import { styled } from '@mui/material';

const StyledIssueCard = styled('div')`
  width: 85%;
  height: auto;
  margin-left: auto;
`;

type Props = {
  milestoneNumber: number;
};

/**
 * issues取得
 * @constructor
 */
const Issues = ({ milestoneNumber }: Props) => {
  const { data, error } = useIssues(milestoneNumber);
  if (error) return <></>;
  return (
    <StyledIssueCard>
      {data ? (
        data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            state={item.state == 'open' ? 'open' : 'closed'}
            description={null}
          />
        ))
      ) : (
        <SkeltonCard />
      )}
    </StyledIssueCard>
  );
};

export default Issues;
