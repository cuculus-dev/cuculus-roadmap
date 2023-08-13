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
      {data ? (
        data.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default MilestoneSample;
