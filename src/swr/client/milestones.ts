import useSWR from 'swr';
import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
import { components } from '@octokit/openapi-types';

const fetcher = async () => {
  const route = 'GET /repos/{owner}/{repo}/milestones';
  type Response = Endpoints[typeof route]['response'];
  type Parameters = Endpoints[typeof route]['parameters'];

  const params: Parameters = {
    owner: 'cuculus-dev',
    repo: 'cuculus-community',
  };

  const octokit = new Octokit();
  const response: Response = await octokit.request(route, params);
  return response.data;
};

export const useMilestones = () => {
  const { data } = useSWR<components['schemas']['milestone'][]>(
    { url: 'milestone' },
    fetcher,
  );
  return { data };
};
