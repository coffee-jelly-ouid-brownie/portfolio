import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer'

let darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});
darkTheme = responsiveFontSizes(darkTheme)

export default function indexPage() {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}