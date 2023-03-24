import React from 'react';
import Header from '../components/Header'
import "./_about.css";
import Footer from "../components/Footer"

export default function aboutPage() {
    return(
        <div>
            <Header />
            <div className="about--inner">
                <h1 className="about--header">About</h1>
                {/* Who am I? */}
                <h2 className="about--subtitle">Who am I?</h2>
                <div className="about--description">
                    <p>
                        Hi! I'm Carys Leung, and I'm a student at Perse Upper. I really like to make stuff, so I decided make a website from scratch so I can share my creations or whatever else I feel like :) 
                    </p>
                    <p>
                        I am a member of the Perse Engineering Club, we're currently focused on competing at <a href="https://www.greenpower.co.uk/">Greenpower</a>, where we have to design, build and race an electric car.
                    </p>
                </div>
                {/* Dope website! How'd you make it? */}
                <h2 className="about--subtitle">Dope website! How'd you make it??</h2>
                <div className="about--description">
                    <p>
                        I used <a href="https://www.gatsbyjs.com/">Gatsby</a>,a React-based open source framework, and <a href="https://mui.com/">Material UI</a> for ReactJS components, and CSS to style it. Definetely was challenging at times, but it was really rewarding when I finally managed to figure it out. 
                    </p>
                    <p>
                        Here's the <a href="https://github.com/coffee-jelly-ouid-brownie/portfolio">blog repository</a>, more about how I made the website can be found on my blog <a href="/#projects">here</a>.
                    </p>
                </div>
                {/* Current projects */}
                <h2 className="about--subtitle">Currents:</h2>
                <div className="about--description">
                    <p>I am doing work experience at <a href="https://sfbd.is/">Surfboard</a>, a start-up company that allows users to share their Arduino code online easily. I've been able to learn about web development and managed to contribute to the website myself as well! It's been lot of fun working with them so far!
                    </p>
                    <p>I'm also working on building a quadrupedal robot - You can find updates on my progress <a href="#">here</a>!
                    </p>
                    <p>And of course will be working on adding more features (or gimmicks) to this website over time :)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const Head = () => <title>About me!</title>