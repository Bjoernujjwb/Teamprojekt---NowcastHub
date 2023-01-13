import React from "react";
import '../CSS/Nav.css';
import {Route, Routes, Link} from 'react-router-dom';
import fomoslogo from '../images/fomos-logo.png';

/* Nav Bar aller Seiten */

function Nav() {

    const navStyle={
        color: "white",
        textDecoration: 'none',
    };

  return (
    <section id="header">
  <div class = "container-fluid">

    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      
    <div>
      <a class="navbar-brand">
      <Link style={navStyle} to="/">
        <img src={fomoslogo} alt="Logo" width="35%" class="d-inline-block" />
      </Link>
      </a>
    </div>
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#target1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="target1">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <Link style={navStyle} to="/">
                    <a class="nav-link">Home</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link style={navStyle} to="/hintergrund">
                    <a class="nav-link" >Hintergrund</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link style={navStyle} to="/kontakt">
                    <a class="nav-link" >Kontakt</a>
                </Link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle btn btn-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sprache
                </a>
                <ul class="dropdown-menu">
                  <Link style={navStyle} to="/">
                  <li><a class="dropdown-item" >Deutsch</a></li>
                  </Link>
                  <Link style={navStyle} to="/en">
                  <li><a class="dropdown-item" > English</a></li>
                  </Link> 
                </ul>
            </li>
          </ul>
          </div>
      </nav>
  </div>
 </section>
  );
}

export default Nav;

 