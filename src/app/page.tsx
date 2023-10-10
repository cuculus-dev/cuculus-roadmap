'use client';
import Caption from '@/app/_components/Caption';
import Milestones from '@/app/_components/Milestones';
import { styled } from '@mui/material/styles';

export default function Home() {
  return (
    <Main>
      <LeftColumn>
        <Caption />
      </LeftColumn>

      <RightColumn>
        <Milestones />
      </RightColumn>
    </Main>
  );
}

const Main = styled('main')`
  display: flex;
  justify-content: center;
  position: relative;
`;

const LeftColumn = styled('div')`
  display: block;
  justify-content: flex-start;
  padding-top: 24px;
  margin-right: 93px;
  max-width: 580px;
`;

const RightColumn = styled('div')`
  display: block;
  padding-top: 75px;
  max-width: 645px;
`;
