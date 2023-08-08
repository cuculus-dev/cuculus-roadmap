'use client';

import { useMilestones } from '@/swr/client/milestones';

/**
 * マイルストーン取得サンプル
 * @constructor
 */
const MilestoneSample = () => {
  const { data } = useMilestones();
  return (
    <div>
      {data && data.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
};

export default MilestoneSample;
