'use client';

import GitHubSvg from '@assets/images/github-mark.svg';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

type Props = {
  href: string;
};

const StyledLink = styled(Link)`
  color: grey;

  :hover,
  :focus,
  :active,
  :focus-visible {
    color: black;
  }
`;

export default function GitHubLink({ href }: Props) {
  return (
    <StyledLink href={href} passHref>
      <GitHubSvg />
    </StyledLink>
  );
}
