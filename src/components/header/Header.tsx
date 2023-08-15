'use client';

import { styled } from '@mui/material/styles';
import Link from 'next/link';
import GitHubLink from '@/components/common/molecules/GitHubLink';
import CuculusLogo from '@/components/common/molecules/CuculusLogo';

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
  border-bottom-width: 2px;
  border-image: linear-gradient(to right, #ff40db, #3ea8ff, #5affbc) 1;
  background-color: rgba(0, 0, 0, 0.0625);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.palette.grey[800]};
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const Header = () => {
  return (
    <StyledHeader>
      <div style={{ padding: '2px' }}>
        <CuculusLogo href={'/'} />
      </div>
      <div style={{ marginLeft: 'auto' }} />
      <Link href="/sample">To Sample</Link>
      <GitHubLink href="https://github.com/cuculus-dev" />
    </StyledHeader>
  );
};

export default Header;
