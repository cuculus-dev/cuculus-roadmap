'use client';

import { styled } from '@mui/material/styles';

const StyledBackground = styled('div')`
  min-height: 100vh;
  background-color: #dcecfc;
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;

  background-image: url('/images/clouds_desktop.png');

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    background-image: url('/images/clouds_laptop.png');
  }
`;

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledBackground>{children}</StyledBackground>;
}
