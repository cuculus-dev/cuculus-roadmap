'use client';

import { styled } from '@mui/material/styles';
import GitHubLink from '@/components/common/molecules/GitHubLink';
import LinkButton from '@/components/common/atoms/LinkButton';

const StyledFooter = styled('footer')`
  max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
  padding: 0 24px;
  margin: 0 auto;
`;

const BorderLine = styled('hr')`
  width: 100%;
  margin: 0;
  border-width: 0;
  border-style: solid;
  border-bottom-width: thin;
  border-color: ${({ theme }) => theme.palette.grey[600]};
`;

const Container = styled('div')`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
`;

const Copyright = styled('span')`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <BorderLine />
      <Container>
        <Copyright>Copyright © 2023 Cuculus.</Copyright>
        <div style={{ marginLeft: 'auto' }} />
        <LinkButton
          href="https://github.com/orgs/cuculus-dev/discussions/categories/q-a"
          color="primary"
          target="_blank"
        >
          お問い合わせ
        </LinkButton>
        <GitHubLink
          href="https://github.com/cuculus-dev"
          height="24px"
          width="24px"
        />
      </Container>
      <div style={{ paddingBottom: '30px' }} />
    </StyledFooter>
  );
};

export default Footer;
