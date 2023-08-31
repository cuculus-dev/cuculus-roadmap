'use client';

import { useIssues } from '@/swr/client/issues';
import Card from '@/components/common/organisms/Card';
import Box from '@mui/material/Box';

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
          <Box sx={{ mb: 0.5 }}>
            <Card
              key={index}
              title={item.title}
              label={item.labels_url}
              state={item.state}
              description={null}
            />
          </Box>
        ))
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Issues;
