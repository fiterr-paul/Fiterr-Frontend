import React from 'react';
import './assets/css/pagenotfound.css';
import { Link } from 'react-router-dom'


const PageNotFound = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagenotfound">
      <h3>This Page Does Not Exist ... <Link onClick={scrollPage} className="link" to='/'>Click Here</Link> and FUCK OFF CUNT!</h3>
    </div>
  )
};


export default PageNotFound;
