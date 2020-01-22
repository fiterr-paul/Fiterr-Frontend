import React, { useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PostContext from '../../context/post/postContext';
import ProfileContext from '../../context/profile/profileContext';

import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';

import PostReply from './PostReply';
import PostReplyForm from './PostReplyForm';

const PostComment = ({ comment: { _id, likes, text, replies, user }, postId }) => {

    const { _id: userId, firstname, lastname, profile: { displayImage } } = user;

    const { likeComment, unlikeComment, removeComment } = useContext(PostContext);
    const { profile: myprofile } = useContext(ProfileContext);

    // console.log(comment);
    const [liked, setLiked] = useState(likes.map(like => like._id).includes(myprofile.user._id));
    const [reply, setReply] = useState(false);

    const toggleReply = () => {
      setReply(!reply);
    }

    const onCommentLike = () => {
      if (liked) {
        unlikeComment(postId, _id);
        setLiked(false);
      } else {
        likeComment(postId, _id);
        setLiked(true);
      }
    }

    return (
      <div className="post-comment">
        <div className="comment-wrapper">
          <div className="comment-image">
            <img src={displayImage && displayImage} alt=""/>
          </div>
          <div className="comment-body">
            <div className="comment-content-wrapper">

              <div className="comment-content">
                <div className="author-name">
                  <Link to="/">{`${firstname} ${lastname}`}</Link>
                </div>
                <div className="comment"> { text } </div>
              </div>

              {/* { userId === myprofile.user._id && (
                  <Fragment>
                    <span className="space-dot">&middot;</span>
                    <span onClick={() => removeComment(postId, _id)} className="action"> remove comment </span>
                  </Fragment>
                )} */}

              <div className="post-options">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            
            <div className="comment-actions">
              <span onClick={onCommentLike} className="action">{ liked ? 'liked' : 'like' }</span>
              <span className="space-dot">&middot;</span>
              <span onClick={toggleReply} className="action"> reply </span>
              <span className="space-dot">&middot;</span>
              <span className="action">{ likes.length } likes </span>
            </div>
  
            {replies.map(reply => (
              <PostReply key={reply._id} reply={reply} postId={postId} commentId={_id}/>
            ))}
  
            { reply && (<PostReplyForm postId={postId} commentId={_id} img={displayImage}/>) }
  
          </div>
        </div>
      </div>
    )
};

export default PostComment
