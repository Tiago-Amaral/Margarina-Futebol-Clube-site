//component de menu

import React from 'react';
import Logo from "../img/logo.png";
import { FaFacebook, FaTwitch, FaYoutube } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    
    
  return (
    <div className="header">
        
        <nav className="navbar">
        <div class="logo">
                <img src={Logo} alt="logo" />
            </div>
                <div className="logo">
                    
                </div>
                <div className="navlist">
                    <ul>
                        <li className="nav-item"><a href="" className="nav-link"><FaFacebook/></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><FaTwitch/></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><FaYoutube/></a></li>
                    </ul>
                </div>

                
          

            </nav>

            <div className="mobile-menu">
                <ul>
                    <li className="nav-item"><a href="" class="nav-link">Início</a></li>
                    <li className="nav-item"><a href="" class="nav-link">Projetos</a></li>
                    <li className="nav-item"><a href="" class="nav-link">Sobre</a></li>
                </ul>


            </div>

    </div>
  )
}

export default Navbar;