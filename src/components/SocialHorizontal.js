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
        <div className="socialHorizontal">
            <Grid container direction={direction || "column"} spacing={3}>
                {socialItems.map((item, j) => (
                    <Grid item key={j}>
                        <Link href={item.url} key={j}>
                            <IconButton key={j}>
                                <item.icon style={{ fontSize: 30 }} key={j} />
                            </IconButton>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}