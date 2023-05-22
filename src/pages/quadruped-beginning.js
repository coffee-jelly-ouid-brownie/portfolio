import React from 'react';
import { Card } from "baseui/card";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { StaticImage } from "gatsby-plugin-image";
import './_quadruped-beginning.css';

export default function BeginningOfQuadruped() {
    return(
        <div>
            <Header />
                <div className='bq--body'>

                    <Card className='bq--card'>
                        <h1 className='bq--header'>Beginning of the Quadruped</h1>
                        <div className='bq--postinfo'>
                            <div className='bq--icon'>
                                <HourglassBottomIcon></HourglassBottomIcon>
                                <p>3 MIN READ</p>
                            </div>
                            <div className='bq--icon'>
                                <CalendarMonthIcon></CalendarMonthIcon>    
                                <p>11 MAY 2023</p>
                            </div>
                        </div>
                        <StaticImage className="bq--image" src='../images/3D-parts.jpg' alt="Beginning of the Quadruped" />
                        <div className='BeginningOfQuadruped--content'>
                            <p>
                                I decided to take on a fairly ambitious project: To build a quadruped robot completely from scratch and have it to be able to walk and perform some simple static movements.
                                Initially, I planned for the quadruped to have a similar design to Boston Dynamic's Spot, however I decided to simplify the main body so that I can spend less time in CAD designing the outer body.
                                Majority of the time was spent on the design of the legs. After looking at some of other people's design of the quadruped leg, here are some I looked at. 
                            </p>
                            <div className="bq--designimagegroup">
                                <StaticImage className="bq--designimage" src='../images/boston-dynamics.png' alt="Boston Dynamics quadruped" />
                                <StaticImage className="bq--designimage" src='../images/triangle-leg.jpeg' alt="Mechanical linkage quadruped" />
                                <StaticImage className="bq--designimage" src='../images/skinny-leg.png' alt="Lightweight quadruped" />
                            </div>
                            <p>
                                I realised that there were some ideas that were consistent throughout the different designs:
                            </p>
                            <ol>
                                <li><b>The motor is as close as possible to the hip joint of the leg</b></li>
                                <p>This will decrease the whole leg's moment of inertia, which reduces the amount of torque required to change the angular velocity in some given time.</p>
                                <li><b>There are 3 joints in the leg for a large range of movement</b></li>
                                <p>This allows for movement in all 3 dimensions which will help in a smoother gait and the balancing of the quadruped. (Excluding the middle design, I decided to not pursue this design because it requires a lot of mechnical linkage and probably much more challenging to execute)</p>
                                <li><b>Shock absorption in the legs</b></li>
                                <p>This adds some compliance to the legs. Some people used mechanical linkages and springs, this was tested by dropping the quadruped from a low height and see if it will stay standing after landing.</p>

                            </ol>
                            <br></br>
                            <h2>The Beginning..</h2>
                            <p>
                                First, I decided to model the leg of the quadruped as it is the main component of the whole system. I used OnShape as its free browser-based CAD so its easily accessible and I have had past experience using it during GCSE. I already had some servos lying around so I modelled the leg using those dimensions. However, in hindsight I should have checked the torque forces and some calculations to check that it will be able to support the quadruped's weight.
                            </p>
                            <StaticImage className="bq--torquecalculation" src='../images/torque-calculation.jpg' alt="Torque calculation"/>
                            <p className="bq--caption">(Calculation is done for 2 legs because only 2 will be supporting the mass of the quadruped while walking) </p>
                            <p>The maximum weight the servo can handle before it stalls (unable to move) is 280g. I will need a servo with much higher stall torque as metal gear servos (more durable and accurate than plastic gears) usually weigh around 80g. For each leg, there will be 3 servos for full range of motion, leading to a combined total of 12 servos, adding up to nearly 1kg from just servos alone. The electricals will add on slightly more weight so I'll need some headroom in the stall torque.</p>
                            <h2>Problems so far..</h2>
                            <p>
                                <ol>
                                    <li><b>Servo does not fit into the bracket.</b> The servo isn't able to slot into the bracket. This can be easily fixed by either separating the bracket into components and then piecing it together or make it slightly larger so it'll be able to slot in.</li>
                                    <li><b>The thigh component was too thick.</b> Makes it bulky and unaesthetic. The bulk is mainly caused by the placement of the servo in the middle of the thigh and the calf being sandwiched in the middle in addition to accomodate 2 bearings which results in roughly 3cm thick thigh.</li>
                                    <li><b>Servo is torque is too weak</b> I will buy servos, ideally with stall torque greater or equal to 10kg/cm, which will allow it to support a quadruped with a weight of 1kg or greater.</li>
                                </ol>
                            </p>
                            <h2>
                                To do next
                            </h2>
                            <p>
                                Next I'll have to..
                            </p>
                            <li>Modify leg CAD design</li>
                            <li>Learn how to program a servo (and multiple servos - 12)</li>
                            <p>
                                Of course there are more things I still have to do before it is complete, but these are just some of the things I will aim to do before the next update.
                            </p>
                            
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

export const Head = () => <title>Beginning of the Quadruped</title>