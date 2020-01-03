import React, { useContext, useState, useEffect } from 'react';
import './assets/scss/header-nav.scss';
import { withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom'
import Logo from './assets/media/icn-fiterr-white-500x500.png';

import profileImgPaul from './assets/media/paul-900x900.jpg';

import AuthContext from '../context/auth/authContext';
import SearchContext from '../context/search/searchContext';
import ProfileContext from '../context/profile/profileContext';
import PostContext from '../context/post/postContext';

const HeaderAuthenticated = () => {

  const history = useHistory();

  const authContext = useContext(AuthContext);
  const searchContext = useContext(SearchContext);
  const profileContext = useContext(ProfileContext)
  const postContext = useContext(PostContext)

  const { searchUsers, clearViewingUser, clearSearchState } = searchContext;
  const { isAuthenticated, logout, user, loading } = authContext;
  const { getProfile, profile, clearProfile } = profileContext;
  const { clearPostState } = postContext;

  const [search, setSearch] = useState('');

  // console.log('---', isAuthenticated, user);  // when does a component rerender in react with context?

  const onLogout = () => {
    console.log('logging out');
    // need to clear all the contexts here
    clearSearchState();
    clearPostState();
    clearProfile();
    logout();
    history.push(`/`);   //by the time we get redirected to the login page, all of our state will be empty  
  }

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    clearViewingUser();
    searchUsers({ search });
    setSearch('');
    history.push(`/search?query=${search}`);
  }

  return (
    <>
      <section className="header navbar">
        <div className="container">
          <div className="authenticated">
            <div className="container-header-logo">
              <div className="header-logo">
                <Link onClick={scrollPage} className="link-logo" to='/'>
                  <img src={Logo} className="fiterr-logo" alt="logo" />
                </Link>
              </div>
              <div className="container-header-search">
                <div className="header-search">
                  <form onSubmit={searchFormSubmit}>
                    <input onChange={onSearch} value={search} type="text" className="search-field" placeholder="search" />
                    <button type="submit" label="search" className="search-btn"><i className="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="container-header-nav">
              <div className="header-nav profile">
              
                <Link onClick={scrollPage} className="link-dashboard" to='/'>
                  <i className="fas fa-tachometer-alt"></i>
                  <div className="dashboard-text">
                    <span>dashboard</span>
                  </div>
                </Link>
                <div className="top-nav-vr"></div>
                <Link onClick={scrollPage} className="link-newsfeed" to='/newsfeed'>
                  <i className="fas fa-newspaper"></i>
                  <div className="newsfeed-text">
                    <span>newsfeed</span>
                  </div>
                </Link>
                <div className="top-nav-vr"></div>
                <Link onClick={scrollPage} className="link-profile" to={user ? `/${user.username}` : '#'}>
                  <img className="profile-image" src={profile ? profile.displayImage : profileImgPaul} alt=""/>
                  <div className="profile-image-text">
                    <span>{ user ? user.username : '' }</span>
                  </div>
                </Link>
                
                  <div className="top-nav-vr"></div>
                  <div className="header-notifications">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <Link to='/messages'>
                    <div className="header-notifications">
                      <i className="fas fa-comment-dots"></i>
                    </div>
                  </Link>
                  <div className="header-notifications">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="top-nav-vr"></div>
                  <div className="header-notifications">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="top-nav-vr top-nav-vr-last"></div>
                  <div onClick={onLogout} href='' className="header-notifications last">
                  <i className="fas fa-lock"></i>{' '} <span style={{marginLeft: '4px'}}>Logout</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubHeaderAuthenticated />
    </>
  )
};

const SubHeaderAuthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="subheader navbar">
        <div className="container">
          <div className="submenu">
            <div className="col-left">
              <Link onClick={scrollPage} className="link-submenu" to='/dashboard'> dashboard </Link>
              <Link onClick={scrollPage} className="link-submenu" to='/clients'> clients </Link>
              <Link onClick={scrollPage} className="link-submenu" to='/bookings'> bookings </Link>
              <Link onClick={scrollPage} className="link-submenu" to='/finances'> finances </Link>
            </div>
            <div className="col-right">
              <Link onClick={scrollPage} className="link-submenu" to='/settings'> settings </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default withRouter(HeaderAuthenticated);
