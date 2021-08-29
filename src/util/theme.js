import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
      primary: {
        main: '#2D4492',
      },
      secondary: {
        main: '#FA741C',
      },
      error: {
        main: '#F44336',
      },
      background: {
        default: '#F2F4F5',
      },
    },
});


export default theme;
  