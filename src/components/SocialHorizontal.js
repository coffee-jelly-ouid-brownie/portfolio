import React from 'react'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';

const socialItems = [
    {icon: GithubIcon, url: ""},
    {icon: LinkedInIcon, url: ""},
    {icon: TwitterIcon, url: ""}
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