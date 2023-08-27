'use client';

import MuiCard from '@mui/material/Card';
import { Avatar, CardContent, CardHeader, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

type Props = {
  title: string;
  description: string | null;
};

export default function Card({ title, description }: Props) {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
