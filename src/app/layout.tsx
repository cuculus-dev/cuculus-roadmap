import '@/styles/globals.css';

import type { Metadata } from 'next';
import EmotionRegistry from '@/components/provider/Registry';
import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Background from '@/components/layout/Background';

const title = 'Cuculus Roadmap';
const description =
  'Cuculusは新しいけどどこか懐かしい短文投稿サービスです。' +
  '事前に計画を公開することでみなさんとプロジェクトの方向性を共有し、意見や要望を取り入れてよりよいSNSを作っていこうと考えています。';

export const metadata: Metadata = {
  title,
  description,
  robots: process.env.META_ROBOTS,
  openGraph: {
    title,
    description,
    siteName: title,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@cuculus_jp',
    creator: '@CureDotTyphoon',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <CssBaseline />
      <body>
        <EmotionRegistry>
          <Background>
            <Header />
            {children}
            <Footer />
          </Background>
        </EmotionRegistry>
      </body>
    </html>
  );
}
