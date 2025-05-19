import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      
      <footer className="footer footer-black footer-white">
        <div className="container-fluid">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">
                    
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/blog" target="_blank" rel="noopener noreferrer">
                  
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">
                   
                  </a>
                </li>
              </ul>
            </nav>
           
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
