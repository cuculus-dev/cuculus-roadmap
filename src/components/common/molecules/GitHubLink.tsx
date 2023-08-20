'use client';

import GitHubSvg from '@assets/images/github-mark.svg';
import { IconButton } from '@mui/material';

type Props = {
  href: string;
};

export default function GitHubLink({ href }: Props) {
  return (
    <IconButton
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label="github"
      title="GitHub"
      size="small"
    >
      <GitHubSvg width="35" height="34" viewBox="0 0 98 96" />
    </IconButton>
  );
}
