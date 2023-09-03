'use client';

import { useIssues } from '@/swr/client/issues';
import Card from '@/components/common/organisms/Card';
import { SkeltonIssuesCard } from '@/components/common/organisms/SkeltonCard';

type Props = {
  milestoneNumber: number;
};

/**
 * issues取得
 * @constructor
 */
const Issues = ({ milestoneNumber }: Props) => {
  const { data } = useIssues(milestoneNumber);
  return (
    <>
      {data ? (
        data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            label={item.labels_url}
            state={item.state}
            description={null}
          />
        ))
      ) : (
        <SkeltonIssuesCard />
      )}
    </>
  );
};

export default Issues;
