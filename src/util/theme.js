import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      // light: '#D9F5FF',
      main: '#2D4492',
      // dark: '#0276aa',
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
  typography: {
    fontFamily: [
      'Prompt', 
      'sans-serif'
    ].join(',')
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2D4492',
    },
    secondary: {
      main: '#FA741C',
    },
    error: {
      main: '#F44336',
    },
  },
  typography: {
    fontFamily: [
      'Prompt', 
      'sans-serif'
    ].join(',')
  }
});

export {lightTheme, darkTheme};