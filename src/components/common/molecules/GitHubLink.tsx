'use client';

import GitHubSvg from 'assets/images/github-mark.svg';
import Link from 'next/link';

export default function GitHubLink() {
  return (
    <Link href="https://github.com/cuculus-dev">
      <GitHubSvg />;
    </Link>
  );
}
