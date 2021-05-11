import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "./img/BrandLogo.png"

import './homef.css'
import './App.css'
const NavLog = () => {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-hover bg-dark">
      <div className="container-fluid">
      <Link to="/" ><img src={logo} alt="" className="" /></Link>
        <Link to="/" className="">&nbsp;&nbsp;</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
         
            <li className="nav-item">
              <Link to="/dropdown" className="nav-link active">&nbsp;&nbsp;&nbsp;Home&nbsp;<i class="fas fa-user"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/doctorhome" className="nav-link">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </BrowserRouter>
  )
}
export default NavLog ;