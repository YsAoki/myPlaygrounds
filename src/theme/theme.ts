import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#757de8',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',  
      light: '#ff4081', 
      dark: '#c51162',  
      contrastText: '#ffffff', 
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#D5D5D5", 
            color: "#FFFFFF", 
            "& .MuiButton-startIcon": {
              color: "rgba(255, 255, 255, 0.5)", 
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#D5D5D5",
          '&.Mui-focused': {
            color: "#404040",
          },
        },
      },
    },
  },
});

export default theme;