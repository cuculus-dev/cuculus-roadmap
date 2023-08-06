import '@/styles/globals.css';

import type { Metadata } from 'next';
import EmotionRegistry from '@/components/provider/Registry';
import React from 'react';
import Header from '@/components/header/Header';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
  title: 'Cuculus Roadmap',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {process.env.META_ROBOTS ? (
          <meta name="robots" content={process.env.META_ROBOTS} />
        ) : undefined}
      </head>
      <CssBaseline />
      <body>
        <EmotionRegistry>
          <Header />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
