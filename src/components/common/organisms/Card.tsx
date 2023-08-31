'use client';

import MuiCard from '@mui/material/Card';
import {
  Avatar,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';

type Props = {
  title: string;
  description: string | null;
  label: string | null;
  state: string;
};

export default function Card({ title, description, label, state }: Props) {
  const states = [
    { state: 'open', icon: '' },
    { state: 'closed', icon: '' },
  ];
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        /* stateのopen or closedで表示する画像を変える */
        avatar={
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
          <Avatar>{}</Avatar>
        }
        title={title}
        // subheader="September 14, 2016"
      />
      {/* ラベルを取得するごとにGridで並べる */}
      <Grid marginLeft={70} container spacing={1}>
        <Grid item key={label}>
          <Typography variant="body2">{}</Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
