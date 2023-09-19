import Caption from '@/app/_components/Caption';
import Milestones from '@/app/_components/Milestones';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <Caption />
      <div style={{ display: 'row' }}>
        <Milestones />
      </div>
    </main>
  );
}
