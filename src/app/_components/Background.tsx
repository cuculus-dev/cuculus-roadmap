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
  width: 100%;
  top: calc(-26vw);
  left: calc(-64vw);

  position: absolute;
  z-index: -30;
`;

const Cloud2 = styled('img')`
  width: 100%;
  top: calc(-3vw);
  left: calc(33vw);

  position: absolute;
  z-index: -40;
`;

const Cloud3 = styled('img')`
  width: 100%;
  top: calc(12vw);
  left: calc(-56vw);

  position: absolute;
  z-index: -10;
`;

const Cloud4 = styled('img')`
  width: 100%;
  top: calc(32vw);
  left: calc(75vw);

  position: absolute;
  z-index: -20;
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
