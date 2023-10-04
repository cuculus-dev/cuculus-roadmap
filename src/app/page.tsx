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
  gap: 93px;
  justify-content: center;
  position: relative;
`;

const LeftColumn = styled('div')`
  display: row;
  justify-content: flex-start;
  max-width: 580px;
`;

const RightColumn = styled('div')`
  display: row;
  max-width: 645px;
`;
