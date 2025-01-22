import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { useSidebar } from './SidebarContext'; // Importa el hook
import './Header.css';
import './Aside.css';

const Layout = ({ children }) => {
  const { isOpen } = useSidebar(); // Usa el hook aquí

  return (
    <div className="wrapper" style={{ display: 'inline' }}>
      <Aside />
      <div
        className="main-content"
        style={{ flex: 1, marginLeft: isOpen ? '250px' : '80px', transition: 'margin-left 0.3s' }}
      >
        <Header />
        <div className="content-wrapper">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
