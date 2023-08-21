import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 960,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
