import React from "react";
import { Button, AppBar, Toolbar } from "@mui/material";



    const headersData = [
        {
        label: "My Account",
        href: "/account",
        },
        {
        label: "Log Out",
        href: "/logout",
        },
    ];

    const getMenuButtons = () => {
        return headersData.map(({label, href}) =>
            <Button sx={{ bgcolor: "orange" }} href={href} variant="contained">
                {label}
            </Button>  
        );
    };



    export default function Header() {
    const displayDesktop = () => {
        return (
          <Toolbar>
            My Forum
            {getMenuButtons()}
          </Toolbar>
        );
    }; 
    return (
        <header>
        <AppBar sx={{ bgcolor: "black" }}>{displayDesktop()}</AppBar>
        </header>
    );
    }