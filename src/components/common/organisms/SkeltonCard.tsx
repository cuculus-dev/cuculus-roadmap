'use client';

import {
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
  styled,
} from '@mui/material';

const StyledSkeltonCard = styled('div')`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid;
  border-bottom-color: #d9d9d9;
`;

export default function SkeltonCard() {
  return (
    <StyledSkeltonCard>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton width="100%" />}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" whiteSpace="pre-wrap">
          <Skeleton width="100%" />
        </Typography>
      </CardContent>
    </StyledSkeltonCard>
  );
}
