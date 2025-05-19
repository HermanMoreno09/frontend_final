import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div>Sidebar</div>
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <a href="https://www.creative-tim.com" className="simple-text logo-mini" target="_blank" rel="noopener noreferrer">
            <div className="logo-image-small">
              <img src="assets/img/logo-small.png" alt="logo" />
            </div>
          </a>
          <a href="https://www.creative-tim.com" className="simple-text logo-normal" target="_blank" rel="noopener noreferrer">
            Cotizaciones
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active">

              <Link to="/dashboard">
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>

              {/** 
              <Link to="/cotizaciones">
                <i className="nc-icon nc-diamond"></i>
                <p>Cotizaciones</p>
              </Link>
            </li>
            <li>
              <Link to="/clientes">
                <i className="nc-icon nc-pin-3"></i>
                <p>Clientes</p>
              </Link>
            </li>
            <li>
              <Link to="/suministros">
                <i className="nc-icon nc-bell-55"></i>
                <p>Suministros</p>
              </Link>
            </li>
            <li>
              <Link to="/cotizacion_items">
                <i className="nc-icon nc-single-02"></i>
                <p>Items</p>
              </Link>
            </li>
            <li>
              <Link to="/seguimiento">
                <i className="nc-icon nc-tile-56"></i>
                <p>Seguimiento</p>
              </Link>
            </li>
            <li>
              <Link to="/visita">
                <i className="nc-icon nc-caps-small"></i>
                <p>Calendario</p>
              </Link> */}
              <Link to="/registro">
                <i className="nc-icon nc-caps-small"></i>
                <p>registro</p>
              </Link>
              <Link to="/solicitud">
                <i className="nc-icon nc-caps-small"></i>
                <p>Solicitud</p>
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
