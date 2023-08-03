'use client';

import styled from '@mui/material/styles/styled';

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
  position: static;
  color: ${({ theme }) => theme.palette.grey[800]};
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const Header = () => {
  return (
    <StyledHeader>
      Left
      <div style={{ marginLeft: 'auto' }} />
      RIGHT
    </StyledHeader>
  );
};

export default Header;
