'use client';

import { useIssues } from '@/swr/client/issues';
import Card from '@/components/common/organisms/Card';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';

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
        <Skeleton width={345} height="auto">
          loading...
        </Skeleton>
      )}
    </>
  );
};

export default Issues;
