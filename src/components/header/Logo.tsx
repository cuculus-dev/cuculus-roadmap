'use client';

import Link from 'next/link';

type Props = {
  height?: string;
};

const Logo = ({ height = '60' }: Props) => {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 266 74"
        preserveAspectRatio="xMinYMid"
      >
        <text
          x="12"
          y="50%"
          dy="0.4em"
          dominant-baseline="alphabetic"
          letter-spacing="11"
          font-weight="bold"
          font-size="40"
          font-family="Meiryo UI"
          fill="#ffffff"
          stroke-width="23"
          stroke="#003300"
          stroke-linejoin="round"
        >
          Cuculus
        </text>
        <text
          x="12"
          y="50%"
          dy="0.4em"
          dominant-baseline="alphabetic"
          letter-spacing="11"
          font-weight="bold"
          font-size="40"
          font-family="Meiryo UI"
          fill="#ffffff"
          stroke-width="0"
        >
          Cuculus
        </text>
      </svg>
    </Link>
  );
};

export default Logo;
