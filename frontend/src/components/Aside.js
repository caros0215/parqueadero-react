import React, { useState, useEffect } from 'react';
import { useSidebar } from './SidebarContext';
import logoClosedImage from '../assets/plantilla/logo11.png';
import logoOpenImage from '../assets/plantilla/logo_final_2.png';
import './Aside.css';

const Aside = () => {
  const { isOpen } = useSidebar();
  const [isSessionValid, setIsSessionValid] = React.useState(true);
  const [activeLink, setActiveLink] = useState('inicio'); // Inicializar con 'inicio'

  useEffect(() => {
    const currentPath = window.location.pathname.replace('/', '');
    setActiveLink(currentPath || 'inicio'); // Actualizar el enlace activo al cargar la página
  }, []);

  const sesionString = localStorage.getItem("session");
  const sesion = sesionString ? JSON.parse(sesionString) : null;

  React.useEffect(() => {
    if (!sesion || !sesion.user) {
      console.error("No se encontró la sesión o el usuario en localStorage");
      setIsSessionValid(false);
      return;
    }
  }, [sesion]);

  if (!isSessionValid) {
    return null;
  }

  const perfil = sesion.user.perfil;

  const MenuItem = ({ href, icon, title }) => {
    const handleClick = (e) => {
      e.preventDefault();
      setActiveLink(href);
      window.location.href = href; // Redirigir a la nueva página
    };

    return (
      <li className={`nav-item ${href === activeLink ? 'active' : ''}`} title={title}>
        <a href={href} className="nav-link" onClick={handleClick}>
          <i className={`nav-icon ${icon}`}></i>
          <p>{title}</p>
        </a>
      </li>
    );
  };

  return (
    <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <a href="/inicio" className="brand-link">
        <img
          src={isOpen ? logoOpenImage : logoClosedImage}
          alt="Logo"
          className={`brand-image ${isOpen ? 'logo-open' : 'logo-closed'}`}
        />
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {(perfil === "Administrador" || perfil === "Especial" || perfil === "Vendedor") && (
              <>
                <MenuItem href="inicio" icon="fa fa-home" title="Inicio" />
                {perfil === "Administrador" && (
                  <MenuItem href="usuarios" icon="fa fa-user" title="Usuarios" />
                )}
                {(perfil === "Administrador" || perfil === "Especial") && (
                  <>
                    <MenuItem href="categorias" icon="fa fa-money" title="Tarifas" />
                    <MenuItem href="productos" icon="fa fa-indent" title="Ingresos" />
                    <MenuItem href="salidas" icon="fa fa-sign-out" title="Salidas" />
                  </>
                )}
                {(perfil === "Administrador" || perfil === "Vendedor") && (
                  <>
                    <MenuItem href="clientes" icon="fa fa-users" title="Abonados" />
                    <MenuItem href="cajas" icon="fa fa-cart-plus" title="Caja" />
                    <MenuItem href="crear-venta" icon="fa fa-usd" title="Pagos" />
                  </>
                )}
                {perfil === "Administrador" && (
                  <MenuItem href="reportes" icon="fa fa-line-chart" title="Reporte ventas" />
                )}
              </>
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;