import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Projects from '../components/Projects';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function indexPage() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  )
}