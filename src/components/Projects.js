import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Chip from "@mui/material/Chip";
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import "./_projects.css";

const useStyles = makeStyles((theme) =>({
    cardMedia:{
        width: "100%",
        height: 300,
    },
    icons: {
        marginBottom: "10px",
    },
    links: {
        marginRight: "auto",
    },
    tag: {
        marginRight: 5,
        marginBottom: 5,
    },
}))

function Project({ title, description, imageUrl, tags, links, pagehref }) {
    const styles = useStyles()
    return ( 
        <Grid item>
            <Card>
              <CardActionArea>

                <div>
                  {pagehref?.map((pages) => (
                    <Link href={pages.href} style={{color: 'white'}} underline="none" className="blog--link">
                  

                  
                        
                        <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
                        <CardContent>
                            <Typography variant="h5" paragraph>
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>{description}</Typography>
                        </CardContent>
                    </Link>
                    ))}
                </div>
              </CardActionArea>
                <CardActions className={styles.icons}>
                    <div className={styles.links}>
                        {links.map((linkItem) => (
                            <IconButton href={linkItem.href} key={linkItem.href}>
                                <linkItem.icon />
                            </IconButton>
                        ))}
                    </div>
                    <div>
                        {tags.map((tag) => (
                            <Chip className={styles.tag} label={tag} variant="outlined" key={tag}></Chip>
                        ))}
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default function Projects() {
    const styles = useStyles()
    return (
      <Container maxWidth="md" id="projects">
        <Box pt={8} mb={2}>
          <h1 className="projects--header">Projects</h1>
        </Box>
        <Grid container direction="column" spacing={4}>
          {projectsData.map((data) => (
            <Project {...data} key={data.title} />
          ))}
        </Grid>
      </Container>
    );
  }

const projectsData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      imageUrl:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Project 1 Image",
      tags: ["React.js", "Material-UI", "Gatsby.js"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://www.github.com",
        },
        {
          icon: OpenInNewIcon,
          href: "https://www.google.com",
        },
      ],
      pagehref: [
        {
         href: "/first-post" 
        },
      ],
        
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      imageAlt: "Project 2 Image",
      imageUrl:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      tags: ["GraphQL", "Apollo Client", "Prisma", "Material-UI"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://www.github.com",
        },
        {
          icon: OpenInNewIcon,
          href: "https://www.google.com",
        },
      ],
      pagehref: [
        {
         href: "/about" 
        },
      ],
    },
    {
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      imageAlt: "Project 3 Image",
      imageUrl:
        "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["React.js", "Node.js", "PostgreSQL", "Next.js"],
      links: [
        {
          icon: OpenInNewIcon,
          href: "https://www.google.com",
        },
      ],
      pagehref: [
        {
         href: "/about" 
        },
      ],
    },
  ];