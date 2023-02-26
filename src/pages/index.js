import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function indexPage() {
  return(
    <ThemeProvider theme={theme}>
      <HeroSection />
      <CssBaseline />
    </ThemeProvider>
  )
}