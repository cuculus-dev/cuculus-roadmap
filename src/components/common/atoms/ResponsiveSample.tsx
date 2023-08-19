'use client';

import { styled } from '@mui/material/styles';

const IsDesktop = styled('div')`
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    display: none;
  }
`;

const IsLaptop = styled('div')`
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

const IsTablet = styled('div')`
  ${({ theme }) => theme.breakpoints.up('laptop')} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    display: none;
  }
`;

const IsMobile = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: none;
  }
`;

export default function ResponsiveSample() {
  return (
    <>
      <IsDesktop>This is desktop.</IsDesktop>
      <IsLaptop>This is laptop.</IsLaptop>
      <IsTablet>This is tablet.</IsTablet>
      <IsMobile>This is mobile.</IsMobile>
    </>
  );
}
