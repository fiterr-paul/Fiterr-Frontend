import React from 'react';
import './assets/css/header-nav.scss';
import { Link } from 'react-router-dom'
import Logo from './assets/images/icn-fiterr-white-500x500.png';


const headerAuthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="authenticated">
      <div className="container-header-logo">
        <div className="header-logo">
          <Link onClick={scrollPage} className="link-logo" to='/'>
            <img src={Logo} className="fiterr-logo" alt="logo" />
          </Link>
        </div>
        <div className="container-header-search">
          <div className="header-search">
            <form>
              <input type="text" className="search-field" placeholder="search" />
              <button type="submit" label="search" className="search-btn"><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-header-nav">
        <div className="header-nav">
          <h3>This Page The NavBar ... <Link onClick={scrollPage} className="link" to='/fucker'>Mother Fucker</Link>!</h3>
        </div>
      </div>
    </div>
  )
};


export default headerAuthenticated;
