'use client';

import { styled } from '@mui/material/styles';
import LinkButton from '@/components/common/atoms/LinkButton';

const Caption = () => {
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <Title>
          <span>Cuculus</span>
          <span>&nbsp;</span>
          <span>Roadmap</span>
        </Title>
        <Description>
          <span>Cuculusは短文投稿サービスとして</span>
          <span>開発される新しいSNSです。</span>
          <span>事前に計画を公開することでプロジェクトの方向性を共有し、</span>
          <span>意見や要望を募集したいと考えています。</span>
        </Description>
      </div>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <LinkButton
          variant="outlined"
          href="https://github.com/orgs/cuculus-dev/discussions/categories/ideas"
        >
          アイデア/機能を提案する
        </LinkButton>
      </div>
    </div>
  );
};

const Title = styled('h1')`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family:
    'General Sans',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';

  font-size: 112px;

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
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  color: ${({ theme }) => theme.palette.grey[800]};

  max-width: 780px;
  font-size: 24px;

  ${({ theme }) => theme.breakpoints.down('laptop')} {
    max-width: 530px;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    max-width: 480px;
  }
`;

export default Caption;
