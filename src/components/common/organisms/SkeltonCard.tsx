'use client';

import MuiCard from '@mui/material/Card';
import { CardContent, CardHeader, Skeleton, Typography } from '@mui/material';

export function SkeltonMilestonesCard() {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton width={257} />}
      ></CardHeader>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="pre-wrap"
        >
          <Skeleton width={313} />
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export function SkeltonIssuesCard() {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton width={212} />}
      ></CardHeader>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="pre-wrap"
        >
          <Skeleton width={268} />
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
