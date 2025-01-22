// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Inicio from './inicio/inicio';
import NotFound from './NotFound';
import Layout from './components/Layout';

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Ruta para el login */}
      <Route path="/" element={<Login />} />

      {/* Ruta para la página de inicio envuelta en Layout */}
      <Route path="/inicio" element={<Layout><Inicio /></Layout>} />

      {/* Ruta para manejar páginas no encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesConfig;
