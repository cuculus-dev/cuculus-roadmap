import useSWRImmutable from 'swr';
import { components } from '@octokit/openapi-types';

export type milestone = components['schemas']['milestone'];

const fetcher = async ({ url }: { url: string }): Promise<milestone[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}${url}`);
  if (res.ok) {
    return (await res.json()) as milestone[];
  } else {
    throw new Error('An error occurred while fetching the data.');
  }
};

export const useMilestones = () => {
  const { data, error } = useSWRImmutable<milestone[], Error>(
    { url: '/repos/cuculus-dev/cuculus-community/milestones' },
    fetcher,
  );
  return { data, error };
};
