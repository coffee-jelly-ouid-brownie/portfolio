import React from 'react';
import Link from '@mui/material/Link';
import { makeStyles } from "@mui/styles"
import { useStyletron } from "styletron-react";
import { Button, SHAPE } from "baseui/button"

const navigationLinks = [
    { name: "About", href: "https://twitter.com" },
    {name: "About2", href: "https://sfbd.is/"}
];

export default function Header() {
        const [css] = useStyletron();
    return(
        <div>{navigationLinks.map((item) => (
            <div className="header--base">
                <div className="header--button">
                    <Button shape={SHAPE.pill} className={css({
                    ":enabled:hover": {background: "#1F70E9"}
                    })}
                    >
                        <Link 
                            className="header--link"
                            color="textPrimary" 
                            variant ="button" 
                            underline="none" 
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </Button>           
                </div>
            </div>
            ))} 
        </div>
    );
}