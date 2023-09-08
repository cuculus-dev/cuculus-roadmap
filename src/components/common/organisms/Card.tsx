'use client';

import MuiCard from '@mui/material/Card';
import {
  Avatar,
  CardContent,
  CardHeader,
  Typography,
  styled,
} from '@mui/material';
import ActiveSvg from '@assets/images/active.svg';
import MargedSvg from '@assets/images/marged.svg';

const StyledCard = styled('div')`
  background-color: #ffffff;
  border-bottom: 1px solid;
  border-bottom-color: #d9d9d9;
`;

type State = 'open' | 'closed';

type Props = {
  title: string;
  description: string | null;
  state: State;
};

const getStateIcon = (state: State) => {
  return state == 'open' ? <ActiveSvg /> : <MargedSvg />;
};

export default function Card({ title, description, state }: Props) {
  return (
    <StyledCard>
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
    </StyledCard>
  );
}
