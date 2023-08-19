import Caption from '@/app/_components/Caption';
import Background from '@/app/_components/Background';

export default function Home() {
  return (
    <main>
      <Background>
        <Caption />
        <Caption /> {/*画像サイズ確認用*/}
        <Caption /> {/*画像サイズ確認用*/}
      </Background>
    </main>
  );
}
