import React from 'react';
import './assets/css/footer.scss';
import { Link } from 'react-router-dom'
import Logo from './assets/images/logo-fiterr-white-3154x1042.png';


const footerUnauthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="footer footer">
          <div className="container">
          <div className="unauthenticated">
            <div className="container-footer-logo">
              <div className="footer-logo">
                <Link onClick={scrollPage} className="link-footer-logo" to='/'>
                  <img src={Logo} className="fiterr-logo" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="container-footer-nav">
              <div className="footer-nav">
                <Link onClick={scrollPage} className="link-footer" to='/'>home</Link>
                <Link onClick={scrollPage} className="link-footer" to='/contact'>contact</Link>
                <Link onClick={scrollPage} className="link-footer" to='/search'>search</Link>
                <Link onClick={scrollPage} className="link-footer" to='/login'>login</Link>
                <Link onClick={scrollPage} className="link-footer" to='/signup'>signup</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default footerUnauthenticated;
