import Caption from '@/app/_components/Caption';
import Milestones from '@/app/_components/Milestones';
import { styled } from '@mui/material/styles';

export default function Home() {
  return (
    <main style={{}}>
      <LeftColumn />
      <Caption />

      <div style={{}}>
        <Milestones />
        <RightColumn />
      </div>
    </main>
  );
}

const LeftColumn = styled('div')`
  display: flex;
  margin: auto;
  justify-content: center;
`;

const RightColumn = styled('div')`
  display: row;
  width: 111%;
  justify-content: center;
  padding: 1%;
`;
