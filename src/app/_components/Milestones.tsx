'use client';

import Issues from '@/app/_components/Issues';
import { useMilestones } from '@/swr/client/milestones';
import { Skeleton, styled } from '@mui/material';
import Card from '@/components/common/organisms/Card';
import Box from '@mui/material/Box';

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

/**
 * マイルストーン取得サンプル
 * @constructor
 */
const Milestones = () => {
  const { data } = useMilestones();
  return (
    <StyledContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          mr: 2,
        }}
      >
        <div style={{ padding: '16px' }}>
          {data ? (
            data.map((item, index) => (
              <>
                <Card
                  label={null}
                  key={index}
                  title={item.title}
                  description={item.description}
                  state={item.state}
                />
                <Box sx={{ width: 300, height: 'auto', ml: 'auto' }}>
                  <Issues milestoneNumber={item.number} />
                </Box>
              </>
            ))
          ) : (
            <Skeleton width={345} height="auto">
              loading...
            </Skeleton>
          )}
        </div>
      </Box>
    </StyledContainer>
  );
};

export default Milestones;
