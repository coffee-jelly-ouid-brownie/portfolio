import React from 'react';
//import Link from "react-router-dom";
import Link from '@mui/material/Link';
import { makeStyles } from "@mui/styles"
import { useStyletron } from "styletron-react";
import { Button, SHAPE } from "baseui/button"
import { flexbox } from '@mui/system';
import './_header.css';

const navigationLinks = [
    { name: "About", href: "https://twitter.com" },
    {name: "About2", href: "https://sfbd.is/"}
];

export default function Header() {
        const [css] = useStyletron();
    return(
        <header className="header-active">
            
            <div className="header--nav">
                <Button 
                    shape={SHAPE.pill}
                    className={css({
                        ":enabled:hover": {background: "#00459B"},
                        colors: { buttonPrimaryFill: "#111111", },
                    })} 
                >
                    <Link href="/about" underline="none" style={{color: 'white'}} className="header--link" color="inherit">About</Link>
                </Button>
                <Button 
                    shape={SHAPE.pill}
                    className={css({
                        ":enabled:hover": {background: "#00459B"},
                        colors: { buttonPrimaryFill: "#111111", },
                    })} 
                >
                    <Link href="/" underline="none" style={{color: 'white'}} className="header--link" color="inherit">Home</Link>
                </Button>
            </div>            
            
        </header>
    )
}