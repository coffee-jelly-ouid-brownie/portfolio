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
                {socialItems.map((item) => (
                    <Grid item>
                        <Link href={item.url}>
                            <IconButton>
                                <item.icon style={{ fontSize: 30 }}/>
                            </IconButton>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}