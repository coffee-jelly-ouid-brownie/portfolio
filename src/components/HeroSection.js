import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Social from "../components/Social"
import Zoom from '@mui/material/Zoom'
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
    section:{
        height: "70vh",
    },
    content:{
        height: "100%",
        zIndex: 100,
        position: "relative"
    },
    container:{
        height: "100%"
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)",
        height: "100%",
        width: "100%",
        zIndex: 2,
        position: "absolute"
    },
    heroImage: {
        height: "70vh",
        width: "100%",
        position: "absolute",
        zIndex: 1,
    }
}
))

export default function HeroSection() {
    const styles = useStyles()
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true))
    return(
        <Paper className={styles.section}>
            <StaticImage className={styles.heroImage} src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676&q=80"/>
            <div className={styles.overlay}></div>
            <Container className={styles.container} maxWidth="md">
                <Grid 
                    className={styles.content} 
                    container 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <Zoom in={shouldShow}>
                        <Grid item sm={8}>
                            <Typography component="h1" variant="h3">
                                Hero section.
                            </Typography>
                            <Typography variant="h5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <Box my={2}>
                                <Button 
                                    href="mailto:caryshcleung@gmail.com" 
                                    variant="outlined" 
                                    color="secondary"
                                >
                                    Get in touch!
                                </Button>
                            </Box>    
                        </Grid>
                    </Zoom>
                    <Grid item>
                        <Social direction="column"/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}