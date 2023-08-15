'use client';

import { styled } from '@mui/material';

const Back = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Cloud4 = styled('img')`
  max-width: 1024px;
  width: 100%;

  position: absolute;
  z-index: -10;
`;

const Cloud2 = styled('img')`
  max-width: 1024px;
  width: 100%;

  position: absolute;
  z-index: -20;
`;

const Cloud3 = styled('img')`
  max-width: 1024px;
  width: 100%;

  position: absolute;
  z-index: -30;
`;

const Cloud1 = styled('img')`
  max-width: 1024px;
  width: 100%;

  position: absolute;
  z-index: -40;
`;

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Back>
        <Cloud4 src="/images/cloud_4.svg" />
        <Cloud2 src="/images/cloud_2.svg" />
        <Cloud3 src="/images/cloud_3.svg" />
        <Cloud1 src="/images/cloud_1.svg" />
      </Back>
      {children}
    </>
  );
}
