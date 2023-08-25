'use client';

import { useIssues } from '@/swr/client/issues';

type Props = {
  milestonesNumber: number;
};

/**
 * issues取得
 * @constructor
 */
const Issues = ({ milestonesNumber }: Props) => {
  const { data } = useIssues(milestonesNumber);
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
