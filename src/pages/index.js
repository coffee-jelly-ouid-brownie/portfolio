import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function indexPage() {
  return(
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <CssBaseline />
    </ThemeProvider>
  )
}