import type { Metadata } from 'next';
import EmotionRegistry from '@/components/provider/Registry';
import React from 'react';
import Header from '@/components/header/Header';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';

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
      <head />
      <body>
        <KumaRegistry>
          <EmotionRegistry>
            <Header />
            {children}
          </EmotionRegistry>
        </KumaRegistry>
      </body>
    </html>
  );
}
