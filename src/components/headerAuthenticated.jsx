import React, { useContext } from 'react';
import './assets/css/header-nav.scss';
import { Link } from 'react-router-dom'
import Logo from './assets/images/icn-fiterr-white-500x500.png';

//not working for some reason
import AuthContext from '../context/auth/authContext';

const HeaderAuthenticated = () => {

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  const onLogout = () => {
    console.log('logging out');
    logout();
  }

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
          {/* <h3>This Page The NavBar ... <Link onClick={scrollPage} className="link" to='/fucker'>Mother Fucker</Link>!</h3> */}
          {/* <Link onClick={onLogout} className="link-header" to='/signup'>logout</Link> */}
          <a onClick={onLogout} href='#!' className="link-header">
            <i className="fas fa-sign-out-alt"></i>{' '} <span className="hide-sm">Logout</span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default HeaderAuthenticated;
