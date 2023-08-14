'use client';

import SvgLink from '@/components/common/atoms/SvgLink';
import CuculusLogoSvg from 'assets/images/logo.svg';

export default function CuculusLogo() {
  return <SvgLink href={'/'} svg={<CuculusLogoSvg />} />;
}
