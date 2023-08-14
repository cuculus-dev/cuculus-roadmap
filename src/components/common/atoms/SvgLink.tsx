'use client';

import Link from 'next/link';

type Props = {
  href: string;
  svg: JSX.Element;
};

export default function SvgLink({ href, svg }: Props) {
  return (
    <Link href={href} passHref>
      {svg}
    </Link>
  );
}
