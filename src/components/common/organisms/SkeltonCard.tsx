'use client';

import MuiCard from '@mui/material/Card';
import { CardContent, CardHeader, Skeleton, Typography } from '@mui/material';

export default function SkeltonCard() {
  return (
    <MuiCard sx={{ maxWidth: 345, width: 345 }}>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton width="100%" />}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" whiteSpace="pre-wrap">
          <Skeleton width="100%" />
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
