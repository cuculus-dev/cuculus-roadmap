import useSWRImmutable from 'swr';
import { components } from '@octokit/openapi-types';

export type milestone = components['schemas']['milestone'];

const fetcher = async ({ url }: { url: string }) => {
  const data = (await (
    await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}${url}`)
  ).json()) as milestone[];
  return data;
};

export const useMilestones = () => {
  const { data } = useSWRImmutable<milestone[]>(
    { url: '/repos/cuculus-dev/cuculus-community/milestones' },
    fetcher,
  );
  return { data };
};
