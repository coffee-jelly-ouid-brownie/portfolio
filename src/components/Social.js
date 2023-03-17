import React from 'react'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';

const socialItems = [
    {icon: GithubIcon, url: "https://github.com/coffee-jelly-ouid-brownie", label:"Github profile button"},
    {icon: LinkedInIcon, url: "https://www.linkedin.com/in/carys-leung-356837258/", label:"LinkedIn profile button"},
    {icon: TwitterIcon, url: "https://twitter.com/CarysLeung", label:"Twitter profile button"}
]



export default function Social({ direction }) {
    return(
        <Grid container direction={direction || "row"} spacing={1.5}>
            {socialItems.map((item, i) => (
                <Grid item key={i}>
                    <Link aria-label={item.label} href={item.url} key={i}>
                        <IconButton key={i}>
                            <item.icon style={{ fontSize: 30 }} key={i}/>
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}
