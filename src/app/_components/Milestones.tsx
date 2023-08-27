'use client';

import Issues from '@/app/_components/Issues';
import { useMilestones } from '@/swr/client/milestones';
import { styled } from '@mui/material';
import Card from '@/components/common/organisms/Card';

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

const StyledWrite = styled('div')`
  width: 600px;
  min-height: 300px;
  margin: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid;
  border-bottom-color: #d9d9d9;
  margin: 20px;
`;

/**
 * マイルストーン取得サンプル
 * @constructor
 */
const Milestones = () => {
  const { data } = useMilestones();
  return (
    <StyledContainer>
      <StyledWrite>
        <div style={{ padding: '16px' }}>
          {data ? (
            data.map((item, index) => (
              <>
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
                <Issues milestoneNumber={item.number} />
              </>
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </StyledWrite>
    </StyledContainer>
  );
};

export default Milestones;
