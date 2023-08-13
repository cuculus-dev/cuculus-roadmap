'use client';

import GitHubSvg from 'assets/images/github-mark.svg';
import Link from 'next/link';

type Props = {
  href: string;
};

export default function GitHubLink({ href }: Props) {
  return (
    <Link href={href} passHref>
      <GitHubSvg />;
    </Link>
  );
}
