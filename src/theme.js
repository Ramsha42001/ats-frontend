// src/theme.js
import { createTheme } from '@mui/material/styles';


// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0569E3',
    },
    secondary: {
      main: '#FF6229',
    },
    background: {
      default: '#D1D5DB',
    },
    text: {
      primary: '#010C19', 
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif;', // Customize font
    h1: {
      fontSize: '3rem',
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: '2rem',
    },
  },
  spacing: 8,
});

export default theme;
