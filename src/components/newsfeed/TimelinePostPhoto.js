import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { Link } from 'react-router-dom';

import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';


const TimelinePostPhoto = () => {

    const postOptionsDropdownHandler = (e) => {
      const element = document.getElementById("post-options-dropdown");
      if (element.style.display === "none") {
        element.style.display = "flex";
      } else if (element.style.display === "flex") {
        element.style.display = "none";
      }
    };
  
    const postOptionsDropdownRemove = (e) => {
      const menu = e.target.parentNode.childNodes[1]
      menu.style.display = "none"
    }
  
    return (
      <>
        <div className="timeline-post-wrapper">
          <div className="header">
            <div className="profile-image">
              <img src={profileImgPaul} alt=""/>
            </div>
            <div className="post-info">
              <div className="post-title">
                <h3><Link to='/'>paul meier</Link> <span>uploaded a photo</span></h3>
              </div>
              <div className="post-date">
                <div className="date">
                  december 31, 2019 <span style={{textTransform: "lowercase"}}>at</span> 11:59pm
                </div>
                <div className="post-options">
                  <button type="button" value="post-options">
                    <i className="fas fa-globe-americas"></i>
                    <i className="fas fa-caret-down"></i>
                  </ button>
                </div>
              </div>
            </div>
            <div className="post-options">
              <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} onBlur={postOptionsDropdownRemove} >
                <i className="fas fa-ellipsis-h"></i>
              </button>
              <div id="post-options-dropdown" style={{display: "none"}} className="options-dropdown-wrapper caret">
                <div className="options-dropdown">
                  <ul>
                    <li>edit post</li>
                    <li>delete post</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="post-content">
              <span>
                Happy New Year family and friends 🥳❤️
              </span>
              <div className="image-upload">
                <img src={nyePaul} alt=""/>
              </div>
            </div>
          </div>
          <div className="post-actions-wrapper post-actions-info">
            <div className="social-actions">
              <div className="icon-wrapper like">
                <div className="icon-bgr">
                  <i className="far fa-thumbs-up"></i>
                </div>
                <span>1 person likes this</span>
                {/* <span>15 people like this</span> */}
              </div>
              <div className="icon-wrapper comment">
                <div className="icon-bgr">
                  <i className="far fa-comment-alt"></i>
                </div>
                <span>0 comments</span>
              </div>
              <div className="icon-wrapper share">
                <div className="icon-bgr">
                  <i className="far fa-share-square"></i>
                </div>
                <span>0 shares</span>
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
  
            {/* <PostComment /> */}
  
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

export default TimelinePostPhoto
