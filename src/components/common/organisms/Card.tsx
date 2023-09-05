'use client';

import MuiCard from '@mui/material/Card';
import { Avatar, CardContent, CardHeader, Typography } from '@mui/material';
import ActiveSvg from '@assets/images/active.svg';
import MargedSvg from '@assets/images/marged.svg';

type State = 'open' | 'closed';

type Props = {
  title: string;
  description: string | null;
  label: string | null;
  state: State;
};

const getStateIcon = (state: State) => {
  return state == 'open' ? <ActiveSvg /> : <MargedSvg />;
};

export default function Card({ title, description, state }: Props) {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: 'transparent' }}>
            {getStateIcon(state)}
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="pre-wrap"
        >
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
