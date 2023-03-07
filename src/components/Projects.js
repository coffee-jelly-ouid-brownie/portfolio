import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Projects() {
    return(
        <div>
            {projectsData.map((data) => (
                <div>{data.title}</div>
            ))}
        </div>
    )
}

const projectsData = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        imageUrl:
            "https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        imageAlt: "Project 1 Image",
        tags: ["React.js", "Material-UI", "Gatsby.js"],
        links: [
            {
                icon: GithubIcon,
                href: "https://github.com/",
            },
            {
                icon: OpenInNewIcon,
                href: "https://www.google.com",
            },
        ],
    },
];