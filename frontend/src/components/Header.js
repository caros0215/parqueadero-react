// src/components/Header.js
import React from 'react';
import { useSidebar } from './SidebarContext';
import './Header.css'; // Importa el CSS del Header

function Header() {
  const { toggleSidebar } = useSidebar();
  
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" role="button" onClick={toggleSidebar}>
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* Resto del contenido del header */}
    </nav>
  );
}

export default Header;
