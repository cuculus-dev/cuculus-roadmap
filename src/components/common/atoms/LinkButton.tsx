import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

interface LinkButtonProps extends Omit<ButtonProps, 'href'> {
  href: string;
}

export default function LinkButton({
  href,
  children,
  ...args
}: LinkButtonProps) {
  return (
    <Button component={Link} href={href} {...args}>
      {children}
    </Button>
  );
}
