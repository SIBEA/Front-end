import React from 'react';
import logo from './../resources/javeriana-logo-horizontal.png';
import './header.css'

function Header() {
 
    return (
      <div>
        <header className="General-header">
          <div className="Header-text">
            <p>Repositorio institucional - Pontificia Universidad Javeriana</p>
          </div>
          <img src={logo} className="logo" alt="Logo"/>
        </header>
        <hr></hr>
      </div>
    );
  }
  
export default Header;