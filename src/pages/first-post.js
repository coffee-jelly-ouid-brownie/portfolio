import React from 'react';
import { Card } from "baseui/card";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { StaticImage } from "gatsby-plugin-image";
import './_first-post.css';

export default function FirstPost() {
    return(
        <div>
            <Header />
                <div className='firstpost--body'>

                    <Card className='firstpost--card'>
                        <h1 className='firstpost--header'>Website launch - First post!</h1>
                        <div className='firstpost--postinfo'>
                            <div className='firstpost--icon'>
                                <HourglassBottomIcon></HourglassBottomIcon>
                                <p>1 MIN READ</p>
                            </div>
                            <div className='firstpost--icon'>
                                <CalendarMonthIcon></CalendarMonthIcon>    
                                <p>14 MARCH 2023</p>
                            </div>
                        </div>
                        <StaticImage className="firstpost--image" src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="First post!" />
                        <div className='firstpost--content'>
                            <p>
                                This is my first post on this new blog. I've never done any web develop completely from scratch (With some help from using a ReactJS framework), so this was a great chance to learn more new skills. I'm hoping to use this blog to encourage myself to make and finish projects, and be able to share my processes.
                            </p>
                            <h2>
                                Why bother making one?
                            </h2>
                            <p>
                                There's many web design templates that are ready-made, flashy designs, professionally done, and can be hosted in only 5 minutes. So, why go through all that effort to make one myself? By creating my own website I feel a sense of ownership and connection to this website that I wouldn't have if I paid for a web template. This will be a website that I have complete control over, able to personalise it to my heart's content
                            </p>
                            <p>
                                This idea of a website blog all began when I wanted to create a quadruped robot (upcoming post!). I wanted a way to share the process and the creation in an interactive way while motivating myself to continue with the project even when it gets challenging. A medium to keep me motivated to develop my coding skills and continue with projects.
                            </p>
                            <h2>
                                Current state
                            </h2>
                            <p>
                                So far, I have the following pages:
                            </p>
                            <li>Welcome page</li>
                            <li>About me</li>
                            <li>Archives (Under development)</li>
                            <p>
                                I did not create a specific page for blog and combined it to be below the hero section of the Welcome page as I feel that is the main focus on my website. This has lead me to consider combining all pages into one so the user wouldn't have to flick between pages, and reduces the need for my page to refresh, increasing the efficiency of my website overall.
                            </p>
                            <p>That is all for now, see you in the next post.</p>
                        </div>
                    </Card>
                    {/* Date */}
                    {/* Title of blog page */}
                    {/* Image */}
                </div>
            <Footer />
        </div>
    )
}

export const Head = () => <title>First post</title>
