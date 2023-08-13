'use client';

import LinkButton from '@/components/common/atoms/LinkButton';
import Link from 'next/link';
import GitHubSvg from 'assets/images/github-mark.svg';

export default function GitHubLink() {
  return (
    <LinkButton>
      <GitHubSvg />
    </LinkButton>
  );
}
