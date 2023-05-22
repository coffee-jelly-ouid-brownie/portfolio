import React from 'react';
import Link from '@mui/material/Link'
import { useStyletron } from "styletron-react";
import { Button, SHAPE } from "baseui/button"
import './_header.css';
import Archives from '../Archives/Archives';
import About from '../../pages/about'


export default function Header() {
        const [css] = useStyletron();
    return(
        <header className="header--active">
            <a 
                href="/#top" 
                style={{color: 'white'}} 
                className="header--name"
            >
                Carys Leung
            </a>
                <div className="header--nav">
                    
                    <Button 
                        shape={SHAPE.pill}
                        className={css({
                            ":enabled:hover": {background: "#00459B"},
                            colors: { buttonPrimaryFill: "#111111", },
                        })} 
                    >
                        <Link 
                            className="header--link"
                            href="/about" 
                            onClick={() => {
                                window.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}
                            underline="none" 
                            style={{color: 'white'}}  
                            color="inherit"
                        >
                        About
                        </Link>
                    </Button>
                    <Button 
                        shape={SHAPE.pill}
                        className={css({
                            ":enabled:hover": {background: "#00459B"},
                            colors: { buttonPrimaryFill: "#111111", },
                        })} 
                    >
                        <Link href="/archive" underline="none" style={{color: 'white'}} className="header--link" color="inherit">Archive</Link>
                    </Button>
                </div>              
        </header>
    )
}