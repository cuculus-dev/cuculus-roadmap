import useSWRImmutable from 'swr';
import { components } from '@octokit/openapi-types';

type Params = { milestone: number; state: 'open' | 'close' | 'all' };

export type issue = components['schemas']['issue'];

const fetcher = async ({
  url,
  params,
}: {
  url: string;
  params: Params;
}): Promise<issue[]> => {
  const query = new URLSearchParams();
  query.append('milestone', params.milestone.toString());
  query.append('state', params.state.toString());
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_URL}${url}?` + query.toString(),
  );
  if (res.ok) {
    return (await res.json()) as issue[];
  } else {
    throw new Error('An error occurred while fetching the data.');
  }
};

export const useIssues = (issueNumber: number) => {
  const { data, error } = useSWRImmutable<issue[], Error>(
    {
      url: '/repos/cuculus-dev/cuculus-community/issues',
      params: { milestone: issueNumber, state: 'all' },
    },
    fetcher,
  );
  return { data, error };
};
