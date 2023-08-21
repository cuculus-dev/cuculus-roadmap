'use client';

import GitHubSvg from '@assets/images/github-mark.svg';
import { IconButton } from '@mui/material';

type Props = {
  href: string;
  width?: string;
  height?: string;
};

export default function GitHubLink({
  href,
  width = '35',
  height = '34',
}: Props) {
  return (
    <IconButton
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label="github"
      title="GitHub"
      size="small"
    >
      <GitHubSvg width={width} height={height} viewBox="0 0 98 96" />
    </IconButton>
  );
}
