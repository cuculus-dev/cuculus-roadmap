'use client';

import { styled } from '@mui/material';

const BackgroundColor = styled('div')`
  background-color: #dcecfc;
`;
const Responsive = styled('img')`
  max-width: 100%;
`;

const StyledZindex1 = styled('div')`
  //background-image: url('/images/cloud_1.svg');
  //background-repeat: no-repeat;
  position: absolute; //xy軸で px指定する
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: -280px;
  margin-left: -300px;
  z-index: 3;
`;

const StyledZindex2 = styled('div')`
  //background-image: url('/images/cloud_2.svg');
  //background-repeat: no-repeat;
  position: absolute; //xy軸で px指定する
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: -40px;
  margin-left: 300px;
  z-index: 1;
`;

const StyledZindex3 = styled('div')`
  //background-image: url('/images/cloud_3.svg');
  //background-repeat: no-repeat;
  position: absolute; //xy軸で px指定する
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  margin-top: 210px;
  margin-left: -250px;
  z-index: 4;
`;

const StyledZindex4 = styled('div')`
  //background-image: url('/images/cloud_4.svg');
  //background-repeat: no-repeat;
  position: absolute; //xy軸で px指定する
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: 375px;
  margin-left: 450px;
  z-index: 2;
`;

//svgファイルから画像サイズいじって合わせる

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundColor>
      <Responsive>
        <StyledZindex1>
          <img src="/images/cloud_4.svg" />
        </StyledZindex1>
        <StyledZindex2>
          <img src="/images/cloud_2.svg" />
        </StyledZindex2>
        <StyledZindex3>
          <img src="/images/cloud_3.svg" />
        </StyledZindex3>
        <StyledZindex4>
          <img src="/images/cloud_1.svg" />
        </StyledZindex4>
      </Responsive>
      {children}
    </BackgroundColor>
  );
}
