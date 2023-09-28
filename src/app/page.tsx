import Caption from '@/app/_components/Caption';
import Milestones from '@/app/_components/Milestones';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '5%',
        marginRight: '5%',
        width: '100%',
      }}
    >
      <Caption />
      <div style={{ display: 'row', width: '111%', padding: '1%' }}>
        <Milestones />
      </div>
    </main>
  );
}
