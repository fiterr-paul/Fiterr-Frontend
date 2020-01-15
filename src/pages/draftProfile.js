import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import './assets/scss/index.scss';
import StickyBox from "react-sticky-box";
import TextareaAutosize from 'react-autosize-textarea';

import profileImgPaul from '../components/assets/media/paul-900x900.jpg';
import profileImgFatBastard from '../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../components/assets/media/logo-28_day_kickstart-1080x1080.png';


const draftProfile = () => {
  return (
    <>
      <section className="body profile">
        <div className="container">
          {/* LEFT COL - NAVIGATION */}
          <StickyBox offsetTop={60} offsetBottom={10}>
            <ProfileLeftNav />
          </StickyBox>

          {/* RIGHT COL - PROFILE */}
          <ProfileHeader />
        </div>
      </section>
    </>
  )
};


const ProfileLeftNav = () => {
  return (
    <>
      <div className="col-social-nav">
        {/* SECTION - USER SWITCHER */}
        <div className="nav-item-wrapper">
          <div className="nav-item switcher">
            <div className="switcher-image">
              <img src={profileImgPaul} alt=""/>
            </div>
            <div className="switcher-info">
              <Link to='/' className="name">
                <span> paul anthony meier </span>
              </Link>
              <div className="title">
                <span> fitness enthusiast </span>
              </div>
              <Link to='/' className="switcher">
                <span> switch to professional </span>
              </Link>
            </div>
          </div>
        </div>
        {/* SECTION - NAV SHORTCUTS */}
        <div style={{marginTop: '10px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> shortcuts </h3>
          </div>
        </div>
        <Link to='/dashboard' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-tachometer-alt"></i><h3> dashboard </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-newspaper"></i><h3> newsfeed </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-user"></i><h3> profile </h3>
          </div>
        </Link>
        <Link to='/messages' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
          <i className="fas fa-comment-dots"></i><h3> messages </h3>
          </div>
        </Link>
        <Link to='/groups' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-users"></i><h3> groups </h3>
          </div>
        </Link>
        {/* SECTION - BUSINESS PAGES */}
        <div style={{marginTop: '20px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> business pages </h3>
          </div>
        </div>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg1} alt=""/>
            </div>
            <h3> paul meier fitness </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg2} alt=""/>
            </div>
            <h3> live fit - live lean </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg3} alt=""/>
            </div>
            <h3> 28 day fat loss kickstart challenge </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group create-new">
            <div className="page-image">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3> create a new business </h3>
          </div>
        </Link>
        {/* SECTION - GROUPS */}
        <div style={{marginTop: '20px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> groups </h3>
          </div>
        </div>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg1} alt=""/>
            </div>
            <h3> PMF 1:1 clients </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg2} alt=""/>
            </div>
            <h3> PMF online clients </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg3} alt=""/>
            </div>
            <h3> 28 day fat loss members </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group create-new">
            <div className="page-image">
              <i className="fas fa-users"></i>
            </div>
            <h3> create a new group </h3>
          </div>
        </Link>
      </div>
    </>
  )
};


const ProfileHeader = () => {
  return (
    <>
      <div className="col-profile">

        <div className="profile-header-container">
          <div className="cover-image-wrapper">
            <div className="cover-image">
            </div>
          </div>
          <div className="profile-nav-container">
            <div className="profile-image-wrapper">
              <div className="profile-image-border">
                <div className="profile-image">
                  <img src={profileImgPaul} alt=""/>
                </div>
              </div>
            </div>
            <div className="profile-nav-wrapper">
              <div className="profile-nav">
                
              <Link to='/' className="nav-item-wrapper caret stream">
                <div className="nav-item">
                  <h3> stream </h3>
                </div>
              </Link>

              <Link to='/' className="nav-item-wrapper">
                <div className="nav-item">
                  <h3> about </h3>
                </div>
              </Link>

              <Link to='/' className="nav-item-wrapper">
                <div className="nav-item">
                  <h3> services </h3>
                </div>
              </Link>

              <Link to='/' className="nav-item-wrapper">
                <div className="nav-item">
                  <h3> followers </h3>
                </div>
              </Link>

              <Link to='/' className="nav-item-wrapper">
                <div className="nav-item">
                  <h3> photos </h3>
                </div>
              </Link>

              </div>
            </div>
          </div>
        </div>
        <ProfileBody />
      </div>
    </>
  )
};


const ProfileBody = () => {
  return (
    <>
      <div className="profile-body-container">
        {/* LEFT COL - PROFILE TIMELINE */}
        <ProfileBodyTimeline />
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <StickyBox offsetTop={70} offsetBottom={0}>
          <ProfileBodyWidgets />
        </StickyBox>
      </div>
    </>
  )
};


const ProfileBodyTimeline = () => {
  return(
    <>
    {/* LEFT COL - PROFILE TIMELINE */}
      <div className="timeline-wrapper">
        <div className="post-box-wrapper">
          <div className="post-box-header">
            <div className="icon-bgr">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <h3> create post </h3>
          </div>
          <div className="post-box-body">
            <div className="profile-image">
              <img src={profileImgPaul} alt=""/>
            </div>
            <div className="post-input-field">
              <TextareaAutosize  type="textarea" name="post" autoComplete="off" placeholder="Share something with your followers ..." required/>
            </div>
          </div>
          <div className="post-box-actions">
            <div className="post-options">
              <button type="button" value="post-options">
                <i className="fas fa-users"></i>
                <span>followers</span>
                <i className="fas fa-caret-down"></i>
              </ button>
            </div>
            <div className="post-button">
              <button type="submit" value="submit"> post </button>
            </div>
          </div>
        </div>
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
        <TimelinePosts />
      </div>
    </>
  )
};


const ProfileBodyWidgets = () => {
  return (
    <>
      {/* RIGHT COL - PROFILE INFO WIDGETS */}
      <div className="profile-info-wrapper">
        <div className="profile-info">
          <div className="widget-wrapper">
            <div className="header">
              <div className="icon-bgr">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3> about paul </h3>
            </div>
            <div className="body no-info">
              <p>nothing to display</p>
            </div>
          </div>
          <div className="widget-wrapper">
            <div className="header">
              <div className="icon-bgr">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3> followers <span> (169) </span> </h3>
            </div>
            {/* <div className="body no-info">
              <p>nothing to display</p>
            </div> */}
            <div className="body thumbnails">
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div className="widget-wrapper">
            <div className="header">
              <div className="icon-bgr">
                <i className="fas fa-camera"></i>
              </div>
              <h3> photos </h3>
            </div>
            {/* <div className="body no-info">
              <p>nothing to display</p>
            </div> */}
            <div className="body thumbnails">
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


const TimelinePosts = () => {
  return (
    <>
      <div className="timeline-post-wrapper">
        <div className="header">
          <div className="profile-image">
            <img src={profileImgPaul} alt=""/>
          </div>
          <div className="post-info">
            <div className="post-title">
              <h3><Link to='/'>paul meier</Link> <span>made a post</span></h3>
            </div>
            <div className="post-date">
              <span> december 22, 2019 at 11:23am </span>
              <div className="post-options">
                <button type="button" value="post-options">
                  <i className="fas fa-globe-americas"></i>
                  <i className="fas fa-caret-down"></i>
                </ button>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="post-content">
            <span>
              I wish I was better at coding JavaScript and React. 🤦🏼‍♂️ Then perhaps maybe I wouldn't feel like such a dumb-fuck! 🤪
            </span>
          </div>
        </div>
        <div className="post-actions-wrapper post-actions-info">
          <div className="social-actions">
            <div className="icon-wrapper like">
              <div className="icon-bgr">
                <i className="far fa-thumbs-up"></i>
              </div>
              {/* <span>1 person likes this</span> */}
              <span>15 people like this</span>
            </div>
            <div className="icon-wrapper comment">
              <div className="icon-bgr">
                <i className="far fa-comment-alt"></i>
              </div>
              <span>2 comments</span>
            </div>
            <div className="icon-wrapper share">
              <div className="icon-bgr">
                <i className="far fa-share-square"></i>
              </div>
              <span>3 shares</span>
            </div>
          </div>
        </div>
        <div className="post-actions-wrapper">
          <div className="social-actions">
            <button type="button" className="social-like" name="" value="social-like">
              <i className="far fa-thumbs-up"></i>
              <span>like</span>
            </button>
            <button type="button" className="social-comment" name="" value="social-comment">
              <i className="far fa-comment-alt"></i>
              <span>comment</span>
            </button>
            <button type="button" className="social-share" name="" value="social-share">
              <i className="far fa-share-square"></i>
              <span>share</span>
            </button>
          </div>
        </div>

        <div className="post-comments-wrapper">

          <PostComment />

          <div className="post-comment-form-wrapper">
            <div className="post-comment-form">
              <div className="form-image">
                <img src={profileImgPaul} alt=""/>
              </div>
              <div className="form-field">
                <form>
                  <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" placeholder="Write a new comment ..." />
                  <button type="submit" label="search" className="comment-btn"> post 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

const PostComment = () => {
  return (
    <div className="post-comment">
      <div className="comment-wrapper">
        <div className="comment-image">
          <img src={profileImgFatBastard} alt=""/>
        </div>
        <div className="comment-body">
          <div className="comment-content">
            <div className="author-name">
              <Link to="/">fat bastard</Link>
              <span>posted a comment</span>
            </div>
            <div className="comment"> Don't worry Paul, you're just "mentally challenged"! Kind of like how I am horozontally challenged! </div>
          </div>
          <div className="comment-actions">
            <span className="action"> like </span>
            <span className="space-dot">&middot;</span>
            <span className="action"> reply </span>
          </div>

          <PostReply />

          <PostReplyForm />

        </div>
      </div>
    </div>
  )
};

const PostReply = () => {
  return (
    <div className="reply-wrapper">
      <div className="reply-image">
        <img src={profileImgPaul} alt=""/>
      </div>
      <div className="reply-body">
        <div className="reply-content">
          <div className="author-name">
            <Link to="/">paul meier</Link>
            <span>posted a reply</span>
          </div>
          <div className="comment"> Fuck you ... you bastard! </div>
        </div>
        <div className="reply-actions">
          <span className="action"> like </span>
          <span className="space-dot">&middot;</span>
          <span className="action"> reply </span>
        </div>
      </div>
    </div>
  )
};

const PostReplyForm = () => {
  return (
    <div className="post-reply-form-wrapper">
      <div className="post-reply-form">
        <div className="form-image">
          <img src={profileImgPaul} alt=""/>
        </div>
        <div className="form-field">
          <form>
            <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" placeholder="Write a reply ..." />
            <button type="submit" label="search" className="comment-btn"> reply 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};


const NewComponent = () => {
  return (
    <>
    </>
  )
};


export default draftProfile;
