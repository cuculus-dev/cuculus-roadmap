'use client';

import { MuseoModerno } from 'next/font/google';
import { styled } from '@mui/material/styles';
import LinkButton from '@/components/common/atoms/LinkButton';

const museoModerno = MuseoModerno({ subsets: ['latin'] });

const Caption = () => {
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <Title style={{}} className={museoModerno.className}>
          <span>Cuculus</span>
          <span>&nbsp;</span>
          <span>Roadmap</span>
        </Title>
        <Description style={{}}>
          <span>
            Cuculusは新しいけどどこか懐かしい短文投稿サービスです。
            <br />
          </span>
          <span>
            事前に計画を公開することでみなさんとプロジェクトの方向性を共有し、
            <br />
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
  font-size: '48px';
  color: '#3EA8FF';
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

/*const StyledButton = styled('h1');
variant: 'contained';
borderRadius: '55px';
*/

const Description = styled('div')`
  color: '#333359';
  max-width: '580px';
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
