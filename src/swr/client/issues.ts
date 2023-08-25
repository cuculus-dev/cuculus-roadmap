import useSWRImmutable from 'swr';
import { components } from '@octokit/openapi-types';

type Params = { milestone: number };

export type issue = components['schemas']['issue'];

const fetcher = async ({ url, params }: { url: string; params: Params }) => {
  const query = new URLSearchParams();
  query.append('milestone', params.milestone.toString());
  return (await (
    await fetch(
      `${process.env.NEXT_PUBLIC_GITHUB_API_URL}${url}?` + query.toString(),
    )
  ).json()) as issue[];
};

export const useIssues = (issueNumber: number) => {
  const { data } = useSWRImmutable<issue[]>(
    {
      url: '/repos/cuculus-dev/cuculus-community/issues',
      params: { milestone: issueNumber },
    },

    fetcher,
  );
  return { data };
};
