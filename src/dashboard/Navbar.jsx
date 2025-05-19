import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div></div>
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
           
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <form>
              
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                
              </li>
              <li className="nav-item btn-rotate dropdown">
                
                
              </li>
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
