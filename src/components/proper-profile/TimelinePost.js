import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import profileImgPaul from '../assets/media/paul-900x900.jpg';
import stockIMG from '../assets/media/stockIMG.jpg';


// contexts
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';
import PostContext from '../../context/post/postContext';


const TimelinePost = ({ post: { _id, content, date, comments, likes } }) => {

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);
    const postContext = useContext(PostContext);

    // const { user: { firstname, lastname } } = authContext;
    const { profile: { displayImage, user: { firstname, lastname } } } = profileContext;  
    // we can access the user info such as firstname and lastname because of the populate() call on the backend 

    const { like } = postContext;

    return (
        <Fragment>
          <div className="timeline-post-wrapper">
            <div className="header">
              <div className="profile-image">
                <img src={displayImage ? displayImage : stockIMG} alt=""/>
              </div>
              <div className="post-info">
                <div className="post-title">
                <h3><Link to='/'>{`${firstname} ${lastname}`}</Link> <span>made a post</span></h3>
                </div>
                <div className="post-date">
                  <span> <Moment format='DD/MM/YYYY hh:mm A'>{date}</Moment> </span>
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
                  { content }
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
                  <span>{likes.length} people like this</span>
                </div>
                <div className="icon-wrapper comment">
                  <div className="icon-bgr">
                    <i className="far fa-comment-alt"></i>
                  </div>
                  <span>{comments.length} comments</span>
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
                <button onClick={() => like(_id)} type="button" className="social-like" name="" value="social-like">
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
              <div className="post-comment">
                <div className="comment-wrapper">
                  <div className="comment-image">
                    <img src={profileImgPaul} alt=""/>
                  </div>
                  <div className="comment-body">
                    <div className="comment-content">
                      <div className="author-name">
                        <Link to="/">fat bastard</Link>
                        <span>posted a comment</span>
                      </div>
                    </div>
                    <div className="comment"> this is the comment body </div>
                    <div className="comment-actions">
                      <span> like </span>
                      <span> reply </span>
                    </div>
                  </div>
    
                  {/* <div className="reply">
                  this is a reply
                  </div> */}
                </div>
              </div>
            </div>
    
          </div>
        </Fragment>
    )
}

export default TimelinePost
