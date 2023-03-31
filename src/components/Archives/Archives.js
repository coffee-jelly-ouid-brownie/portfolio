import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './_archives.css';
import CardActionArea from '@mui/material/CardActionArea';


function Archives({title, description, image}) {
    return(
        <div>
            {image.map((item, j) => (

                <Card sx={{ maxWidth: 500}} key={j}>
                    <CardActionArea key={j}>
                        <img src={require("../../images/" + item.imageName + item.imageEnd).default} className="tags--image" alt={item.imageAlt} key={j}/>
                        <CardContent>
                            <h2 className="tags--title">
                                {title}
                            </h2>
                            <h3 className="tags--description">
                                {description}
                            </h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>        
    )
}

export default function ArchiveCards() {
    return (
      <div className="archives--inner">
        <div>
          <h1 className="archives--header">Archives</h1>
        </div>
        <div className="archives--card">
          {archiveData.map((data) => (
            <Archives {...data} key={data.title} />
          ))}
        </div>
      </div>
    );
  }

const archiveData = [
    {
        title: "Web development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: [
            {
                imageName: "webDesign",
                imageEnd: ".png",
                imageAlt: "Web development archive",
            }
        ],
    },
    {
        title: "Quadruped",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        link: "../quadruped",
        image: [
        {
            imageName: "testpicture",
            imageEnd: ".jpg",
            imageAlt: "quadruped archive",
        }
        ],
    },
    {
        title: "Random stuff",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: [
            {
                imageName: "testpicture2",
                imageEnd: ".jpg",
                imageAlt: "random archive",
            }
        ],
    },
]