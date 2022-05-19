import React from 'react';

import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from '../Home';
import About from '../About';
import logo from "../../Assets/logo.svg"

function BoostrapNav(){
    return(
        <div>
        <BrowserRouter>
         <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
             <div class="container">
                <img src={logo} width="30" height="30" alt="Standard React logo" />
              
              <Link to="/" className="navbar-brand">Home</Link> {/*Clickable links related to the Router*/}
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/About" className="nav-link">About</Link>
                  </li>
                  </ul>
                  </div>
              </div>
            </nav>
            <Routes>
            <Route path="/" element={<Home/>} />{/*The Router enables the navigation among views of various components*/}
            <Route path="/About" element={<About/>} /> {/*New Use requires element*/}
            </Routes>
        </BrowserRouter>
        </div>
   
        
    )
}

export default BoostrapNav;






//Code inspired from https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec