'use client';

import { useIssues } from '@/swr/client/issues';

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
    <div style={{ padding: '16px' }}>
      {data ? (
        data.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Issues;