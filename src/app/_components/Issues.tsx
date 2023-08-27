'use client';

import { useIssues } from '@/swr/client/issues';
import Card from '@/components/common/organisms/Card';

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
          <Card key={index} title={item.title} description={null} />
        ))
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Issues;
