import Caption from '@/app/_components/Caption';
import MilestonesSample from '@/app/_components/MilestonesSample';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <Caption />
      <div style={{ display: 'row' }}>
        <MilestonesSample />
        <MilestonesSample />
        <MilestonesSample />
      </div>
    </main>
  );
}
