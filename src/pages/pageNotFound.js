import React from 'react';
import './assets/scss/index.scss';
import { Link } from 'react-router-dom'

import errorImage from './assets/media/error-page.gif';


const PageNotFound = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="body error-page">
        <div className="container">
          <div className="pagenotfound">
            <div className="image">
              <img className="error-image" src={errorImage} alt=""/>
            </div>
            <div className="text">
              <span>Sorry, this page does not exist! <br /> You may want to <Link onClick={scrollPage} className="link" to='/login'>login</Link> or <Link onClick={scrollPage} className="link" to='/signup'>signup</Link>.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default PageNotFound;
