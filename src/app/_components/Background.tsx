'use client';

import { styled } from '@mui/material';

const BackgroundColor = styled('div')`
  background-color: #dcecfc;
`;

const StyledZindex1 = styled('div')`
  background-image: url('/images/cloud_1.svg');
  background-repeat: no-repeat;
  background-position: top; //xy軸で px指定する
  background-size: 100% 100%;
  z-index: 1;
`;

const StyledZindex2 = styled('div')`
  background-image: url('/images/cloud_2.svg');
  background-repeat: no-repeat;
  background-position: top; //xy軸で px指定する
  background-size: 100% 100%;
  z-index: 2;
`;

const StyledZindex3 = styled('div')`
  background-image: url('/images/cloud_3.svg');
  background-repeat: no-repeat;
  background-position: top; //xy軸で px指定する
  background-size: 100% 100%;
  z-index: 3;
`;

const StyledZindex4 = styled('div')`
  background-image: url('/images/cloud_4.svg');
  background-repeat: no-repeat;
  background-position: top; //xy軸で px指定する
  background-size: 100% 100%;
  z-index: 4;
`;

//svgファイルから画像サイズいじって合わせる

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundColor>
      <StyledZindex1>
        <StyledZindex2>
          <StyledZindex3>
            <StyledZindex4>{children}</StyledZindex4>
          </StyledZindex3>
        </StyledZindex2>
      </StyledZindex1>
    </BackgroundColor>
  );
}
