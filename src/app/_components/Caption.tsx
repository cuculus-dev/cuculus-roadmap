'use client';

import { styled } from '@mui/material/styles';
import LinkButton from '@/components/common/atoms/LinkButton';
import { CloudFormationInit } from 'aws-cdk-lib/aws-ec2';
import { Color } from 'aws-cdk-lib/aws-cloudwatch';

const Caption = () => {
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <Title style={{ color: '#3EA8FF', fontSize: '48px' }}>
          <span>Cuculus</span>
          <span>&nbsp;</span>
          <span>Roadmap</span>
        </Title>
        <Description
          style={{ color: '#333359', fontSize: '24px', maxWidth: '580px' }}
        >
          <span>
            Cuculusは新しいけどどこか懐かしい
            <br />
            短文投稿サービスです。
            <br />
          </span>
          <span>
            事前に計画を公開することでみなさんとプロジェクトの方向性を共有し、
            意見や要望を募集し、よりよいSNSを作っていこうと考えています。
          </span>
        </Description>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <LinkButton
            variant="contained"
            sx={{ borderRadius: '55px' }}
            href="https://github.com/orgs/cuculus-dev/discussions/categories/ideas"
          >
            アイデア/機能を提案する
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

const Title = styled('h1')`
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family:
    'MuseoModerno',
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
