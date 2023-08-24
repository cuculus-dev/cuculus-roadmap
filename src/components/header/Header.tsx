'use client';

import { styled } from '@mui/material/styles';
import GitHubLink from '@/components/common/molecules/GitHubLink';
import CuculusLogo from '@/components/common/molecules/CuculusLogo';

const StyledHeader = styled('header')`
  top: 0;
  position: sticky;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.grey[100]};
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: #3ea8ff;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.palette.grey[800]};
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const Container = styled('div')`
  display: flex;
  max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
  min-height: 60px;
  padding: 0 24px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div style={{ padding: '2px' }}>
          <CuculusLogo href={'/'} />
        </div>
        <div style={{ marginLeft: 'auto' }} />
        <GitHubLink href="https://github.com/cuculus-dev" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
