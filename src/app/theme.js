import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FAEBD7', // Warm Cream
      light: '#FFF1DC', // Classic Cream
      dark: '#E8D5B7',
      contrastText: '#5C4033', // Dark brown for text on cream
    },
    secondary: {
      main: '#D4A574', // Warm tan for secondary actions
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF1DC', // Classic Cream
      paper: '#FAEBD7', // Warm Cream
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#5C4033', // Dark brown for headings
    },
    h5: {
      fontWeight: 600,
      color: '#5C4033',
    },
    h6: {
      fontWeight: 600,
      color: '#5C4033',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
          border: 'none',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(255, 90, 54, 0.3)',
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#ff5a36',
            color: '#ffffff',
            border: '2px solid transparent',
            '&:hover': {
              backgroundColor: '#e54a2a',
              boxShadow: '0 6px 20px rgba(255, 90, 54, 0.4)',
              transform: 'translateY(-2px)',
            },
            '&:active': {
              transform: 'translateY(0)',
              boxShadow: '0 2px 8px rgba(255, 90, 54, 0.3)',
            },
          },
        },
        outlined: {
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#ff5a36',
          color: '#ff5a36',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#e54a2a',
            backgroundColor: '#ff5a36',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(255, 90, 54, 0.3)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(255, 90, 54, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#FFFFFF',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
        },
        elevation1: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAEBD7',
          color: '#5C4033',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFF1DC', // Classic Cream
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#FAEBD7', // Warm Cream for selected items
            color: '#5C4033',
            '&:hover': {
              backgroundColor: '#E8D5B7',
            },
            '& .MuiListItemIcon-root': {
              color: '#5C4033',
            },
          },
        },
      },
    },
  },
});

export default theme;
