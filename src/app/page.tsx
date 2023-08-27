import Caption from '@/app/_components/Caption';
import Card from '@/app/_components/Card';
import MilestonesSample from '@/app/_components/MilestonesSample';

export default function Home() {
  return (
    <main>
      <Caption />
      <Card>
        <MilestonesSample />
      </Card>
    </main>
  );
}
