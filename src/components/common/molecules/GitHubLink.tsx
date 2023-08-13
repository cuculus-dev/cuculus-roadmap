'use client';

import LinkButton from '@/components/common/atoms/LinkButton';
import GitHubSvg from 'assets/images/github-mark.svg';

type Props = {
    href: string;
}

export default function GitHubLink({href}:Props) {
  return (
    <LinkButton href={href}>
      <GitHubSvg />
    </LinkButton>
  );
}
