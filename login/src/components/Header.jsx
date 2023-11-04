import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo">Daelim 대림</div>
          </div>
          <div className="col-6 text-right">
            <nav className="nav">
              <ul className="nav-list">
                <Link to = '../' style={{ textDecoration: 'none'}}>
                    <li className="nav-item">Home</li>
                </Link>
                <Link to = '../Login' style={{ textDecoration: 'none'}}>
                    <li className="nav-item">Login</li>
                </Link>
                <Link to = '../SignUp' style={{ textDecoration: 'none'}}>
                    <li className="nav-item">SignUp</li>
                </Link>
                <Link to = '../Community' style={{ textDecoration: 'none'}}>
                  <li className="nav-item">Community</li>
                </Link>
                <li className="nav-item">Support</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;