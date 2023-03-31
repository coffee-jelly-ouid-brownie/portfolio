import React from 'react';
import './_footer.css'
import logo from '../../images/favicon.png';
import SocialHorizontal from '../SocialHorizontal/SocialHorizontal';

export default function Footer() {
    return(
        <div className="footer--line">
            <div className="footer--content">
                <h3>&copy; Carys Leung</h3>
                <img src={logo} alt="website logo"/>
                <SocialHorizontal direction="row" />
            </div>
        </div>
    )
}