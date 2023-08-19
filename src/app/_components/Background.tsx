'use client';

import { styled } from '@mui/material';

const Back = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Cloud1 = styled('img')`
  max-width: 1255px;
  width: 100%;
  margin-top: -330px;
  margin-left: -800px;

  position: absolute;
  z-index: -30;
`;

const Cloud2 = styled('img')`
  max-width: 1226px;
  width: 100%;
  margin-top: -40px;
  margin-left: 400px;

  position: absolute;
  z-index: -40;
`;

const Cloud3 = styled('img')`
  max-width: 1283px;
  width: 100%;
  margin-top: 160px;
  margin-left: -720px;

  position: absolute;
  z-index: -10;
`;

const Cloud4 = styled('img')`
  max-width: 1006px;
  width: 100%;
  margin-top: 320px;
  margin-left: 750px;

  position: absolute;
  z-index: -20;

  // FIXME タブレット以下だった場合は黄色にして最前面にしちゃうサンプル
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    background-color: yellow; // FIXME
  }
`;

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Back>
        <Cloud1 src="/images/cloud_1.svg" />
        <Cloud2 src="/images/cloud_2.svg" />
        <Cloud3 src="/images/cloud_3.svg" />
        <Cloud4 src="/images/cloud_4.svg" />
      </Back>
      {children}
    </>
  );
}
