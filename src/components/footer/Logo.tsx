'use client';

import Link from 'next/link';

type Props = {
  height?: string;
};

const Logo = ({ height = '60' }: Props) => {
  return <Link href="/">Cuculus</Link>;
};

export default Logo;
