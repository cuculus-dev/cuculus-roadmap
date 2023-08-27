'use client';

import { styled } from '@mui/material';

const StyledCard = styled('div')`
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

const StyledWriteCard = styled('div')`
  width: 600px;
  min-height: 300px;
  margin: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid;
  border-bottom-color: #d9d9d9;
  margin: 20px;
`;

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <StyledCard>
      <StyledWriteCard>{children}</StyledWriteCard>
    </StyledCard>
  );
}
