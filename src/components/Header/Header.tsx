'use client';

import AppBar from '@mui/material/AppBar';
import styled from '@mui/material/styles/styled';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.grey[100]};
  border-width: 0;
  border-bottom-width: thin;
  background-color: rgba(255, 255, 255, 0.9);
  position: static;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledList = styled('ul')`
  display: flex;
  padding-inline-start: 0;
`;

const StyledListItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton sx={{ textAlign: 'center' }} component={Link} href={href}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const Header = () => {
  return (
    <StyledAppBar>
      <StyledList>
        <StyledListItem text="Home" href="/" />
        <StyledListItem text="Sample" href="/sample" />
        <StyledListItem text="Sample" href="/sample" />
      </StyledList>
    </StyledAppBar>
  );
};

export default Header;
