'use client';

import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  variant: any;
  href: string;
  label: string;
  size: any;
  color: any;
}

export const Button = ({
  variant,
  href,
  label,
  size,
  color,
  ...args
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      href={href}
      size={size}
      color={color}
      {...args}
    >
      {label}
    </MuiButton>
  );
};
