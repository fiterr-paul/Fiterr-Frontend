import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import PostComment from './PostComment';
import NewComment from './NewComment';

import stockIMG from '../assets/media/stockIMG.jpg';


// contexts
import ProfileContext from '../../context/profile/profileContext';
import PostContext from '../../context/post/postContext';

import { likesText } from '../../utils/Utils';


const TimelinePost = ({ post: { _id, content, date, comments, likes, postOwnerUser }}) => {

    const { _id: userId, firstname, lastname, profile: { displayImage }} = postOwnerUser;

    const { like, unlike, removePost } = useContext(PostContext);
    const { profile: myprofile } = useContext(ProfileContext);

    // check if we have liked it or not
    const [liked, setLiked] = useState(likes.map(like => like.user).includes(myprofile.user._id));
    console.log(liked);

    console.log('render timeline post');

    const onLikeClick = () => {
      if (liked) {
        unlike(_id);
        console.log('unliking');
        setLiked(false);
      } else {
        like(_id)
        console.log('liking');
        setLiked(true);
      }
    }

    // eslint-disable-next-line
    const postOptionsDropdownHandler = (e) => {
      const element = document.getElementById("post-options-dropdown");
      if (element.style.display === "none") {
        element.style.display = "flex";
      } else if (element.style.display === "flex") {
        element.style.display = "none";
      }
    };
  
    // eslint-disable-next-line
    const postOptionsDropdownRemove = (e) => {
      const menu = e.target.parentNode.childNodes[1]
      menu.style.display = "none"
    }

    return (
      <>
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
                <div className="date">
                  <span> <Moment format='MMMM DD, YYYY [at] hh:mm A'>{date}</Moment> </span>
                </div>
                <div className="post-options">
                  <button type="button" value="post-options">
                    <i className="fas fa-globe-americas"></i>
                    <i className="fas fa-caret-down"></i>
                  </ button>
                </div>
              </div>
            </div>
              { myprofile.user._id === userId && 
              (<div className="post-options">
                  <i onClick={() => removePost(_id)} className="fas fa-trash"></i>
                {/* <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} onBlur={postOptionsDropdownRemove} >
                  <i className="fas fa-ellipsis-h"></i>
                </button>
                <div id="post-options-dropdown" style={{display: "none"}} className="options-dropdown-wrapper caret">
                  <div className="options-dropdown">
                    <ul>
                      <li>edit post</li>
                      <li onClick={() => removePost(_id)}>delete post</li>
                    </ul>
                  </div>
                </div> */}
              </div>)}
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
                <span>{likesText(likes.length)}</span>
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
              <button onClick={onLikeClick} type="button" className={`social-like liked-${liked}`} name="" value="social-like" >
                <i className="far fa-thumbs-up"></i>
                <span>{ liked ? 'liked' : 'like' }</span>
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
  
            
            {comments.map(comment => (
              <PostComment key={comment._id} comment={comment} postId={_id} />
            ))}

            <NewComment postId={_id} />

          </div>
        </div>
      </>
    )
}

export default TimelinePost
