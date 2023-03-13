import React from 'react';
import Link from '@mui/material/Link';
import { useStyletron } from "styletron-react";
import { Button, SHAPE } from "baseui/button"
import './_header.css';


export default function Header() {
        const [css] = useStyletron();
    return(
        <header className="header--active">
            <a href="/" style={{color: 'white'}} className="header--name">Carys Leung</a>
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
                        <Link href="/" underline="none" style={{color: 'white'}} className="header--link" color="inherit">Assets</Link>
                    </Button>
                </div>              
        </header>
    )
}