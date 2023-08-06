'use client';

import { styled } from '@mui/material/styles';

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
          <span>CuculusはTwitterに替わる場所として</span>
          <span>開発される新しいSNSです。</span>
          <span>事前に計画を公開することでプロジェクトの方向性を共有し、</span>
          <span>フィードバックや意見を収集したいと考えています。</span>
        </Description>
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
  color: #00ced1;
`;

const Description = styled('div')`
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  color: #334155;

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
