'use client';

import styled from '@mui/material/styles/styled';
import Logo from '@/components/header/Logo';
import Link from 'next/link';

const StyledHeader = styled('header')`
  top: 0;
  display: flex;
  position: sticky;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  box-shadow: none;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.grey[100]};
  border-width: 0;
  border-bottom-width: thin;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.palette.grey[800]};
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div style={{ marginLeft: 'auto' }} />
      <Link href="/sample">TO SAMPLE</Link>
    </StyledHeader>
  );
};

export default Header;
