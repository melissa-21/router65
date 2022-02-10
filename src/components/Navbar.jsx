import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import Router from "./Router";




const navbar = () => {


    return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
                        <Link to="/posts" style={{textDecoration: 'none'}}>Blog</Link>
                        <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
                    </Toolbar>
                    </AppBar>
              <Router/>
            </div>
    );
}
export default navbar;