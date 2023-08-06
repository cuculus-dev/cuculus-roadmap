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
        <p>
          CuculusはTwitterに替わる場所として開発される新しいSNSです。
          事前に計画を公開することで、プロジェクトの方向性を共有し、フィードバックや意見を収集したいと考えています。
        </p>
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

export default Caption;
