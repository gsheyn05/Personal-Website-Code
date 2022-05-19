import React from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



function Navbar2() {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
            <Link to ='../Component/Home.js'>Home</Link>
            </div>
            <ul class="nav navbar-nav">

                <li>
                <Link to="../Components/About.js">About</Link>
                </li>
            </ul>
        </div>
    
</nav>
        
    )
}

export default Navbar2