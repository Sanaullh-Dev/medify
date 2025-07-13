import { createTheme } from '@mui/material/styles';

// Create a custom theme with Medify's color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2AA7FF', // Primary blue color
      light: '#5BC0FF',
      dark: '#1e8acc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1B3C74', // Secondary navy blue color
      light: '#4A649B',
      dark: '#152e5a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none', // Prevent uppercase transformation
    },
  },
  shape: {
    borderRadius: 12, // Custom border radius
  },
  components: {
    // Customize button styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          padding: '12px 30px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 15px rgba(42, 167, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(42, 167, 255, 0.4)',
          },
        },
        outlined: {
          border: '2px solid',
          '&:hover': {
            border: '2px solid',
          },
        },
      },
    },
    // Customize card styles
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    // Customize app bar styles
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
          color: '#2d3748',
        },
      },
    },
  },
});

export default theme;
