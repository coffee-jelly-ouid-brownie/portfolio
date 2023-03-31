import React, { useEffect } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection/HeroSection';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

let darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});
darkTheme = responsiveFontSizes(darkTheme)

export default function IndexPage() {
  useEffect(() => {
    document.title = 'Carys Leung';
  }, []);
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects id="projects" />
      <Footer />
    </ThemeProvider>
  )
}