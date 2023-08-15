'use client';

import CuculusLogoSvg from 'assets/images/headerlogo.svg';
import Link from 'next/link';

type Props = {
  href: string;
};

export default function CuculusLogo({ href }: Props) {
  return (
    <Link href={href} passHref>
      <CuculusLogoSvg />
    </Link>
  );
}
