'use client';

import { MuseoModerno } from 'next/font/google';
import { styled } from '@mui/material/styles';
import LinkButton from '@/components/common/atoms/LinkButton';

const museoModerno = MuseoModerno({ subsets: ['latin'], weight: ['600'] });

const Caption = () => {
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <Title className={museoModerno.className}>
          <span>Cuculus</span>
          <span>&nbsp;</span>
          <span>Roadmap</span>
        </Title>
        <Description>
          <span>Cuculusは新しいけど</span>
          <span>どこか懐かしい短文投稿サービスです。</span>
          <span>
            事前に計画を公開することでみなさんとプロジェクトの方向性を共有し、
          </span>
          <span>
            意見や要望を取り入れてよりよいSNSを作っていこうと考えています。
          </span>
        </Description>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <LinkButton
            variant="contained"
            sx={{ borderRadius: '55px' }}
            href="https://github.com/orgs/cuculus-dev/discussions/categories/ideas"
            target="_blank"
          >
            アイデア/機能を提案する
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

const Title = styled('h1')`
  font-size: 48px;
  color: #3ea8ff;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.down('laptop')} {
    font-size: 80px;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    font-size: 72px;
  }

  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Description = styled('div')`
  color: #333359;
  max-width: 580px;
  text-align: center;
  font-family: Arial;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  color: ${({ theme }) => theme.palette.grey[800]};

  ${({ theme }) => theme.breakpoints.down('laptop')} {
    max-width: 530px;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    max-width: 480px;
  }
`;

export default Caption;
