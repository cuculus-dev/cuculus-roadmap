'use client';

import { ReactNode } from 'react';
import styled from '@mui/material/styles/styled';

/**
 * 横幅を制限する
 * @constructor
 */
const WidthProvider = ({ children }: { children: ReactNode }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

const paddingSide = '20px';

const StyledDiv = styled('div')`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: ${({ theme }) =>
    `calc(${theme.breakpoints.values.desktop}px + calc(2 * ${paddingSide}))`};
  padding-left: ${paddingSide};
  padding-right: ${paddingSide};
`;

export default WidthProvider;
