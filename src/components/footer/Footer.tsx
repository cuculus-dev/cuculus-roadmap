'use client';

import { styled } from '@mui/material/styles';
import Logo from '@/components/footer/Logo';
import Link from 'next/link';
import GitHubLink from '@/components/common/molecules/GitHubLink';

const StyledFooter = styled('footer')`
  display: flex;
  justify-content: space-between;
  //justify-content: space-around;
  box-shadow: none;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.grey[100]};
  border-width: 0;
  border-bottom-width: 2px;
  border-image: linear-gradient(to right, #ff40db, #3ea8ff, #5affbc) 1;
  background-color: rgba(0, 0, 0, 0.0625);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <GitHubLink href="https://github.com/cuculus-dev" />
        Copyright © Cuculus.All Rights Reserved.
      </div>
      <div style={{ fontSize: '20px', display: 'flex', alignItems: 'end' }}>
        <Link href="https://github.com/cuculus-dev/cuculus-roadmap/discussions/categories/q-a">
          お問い合わせ
        </Link>
        　　
      </div>
    </StyledFooter>
  );
};

export default Footer;
