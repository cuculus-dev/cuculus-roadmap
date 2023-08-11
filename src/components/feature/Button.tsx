import React from 'react';
import { Button as MuiButton } from '@mui/material';
import Link from 'next/link';

export interface ButtonProps {
  label: string;
}
export interface LinkButtonProps {
  label: string;
  url: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

//引数からボタンをクリックしたときの飛ぶ先を変更したい
export const LinkButton = ({ label, url, ...rest }: LinkButtonProps) => (
  <MuiButton
    variant="contained"
    color="success"
    size="medium"
    component={Link}
    href={url}
    {...rest}
  >
    {label}
  </MuiButton>
);
