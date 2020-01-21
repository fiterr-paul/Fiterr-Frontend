import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';

import postContext from '../../context/post/postContext';
import ProfileContext from '../../context/profile/profileContext';


const PostReply = ({ reply: { _id, text, likes, user }, postId, commentId }) => {

    const { _id: userId, firstname, lastname, profile: { displayImage }} = user;


    const { likeReply, removeReply, unlikeReply } = useContext(postContext);
    const { profile: myprofile } = useContext(ProfileContext);

    const [liked, setLiked] = useState(likes.map(like => like._id).includes(myprofile.user._id));


    const onReplyLike = () => {
      if (liked) {
        unlikeReply(postId, commentId, _id);
        setLiked(false);
      } else {
        likeReply(postId, commentId, _id);
        setLiked(true);
      }
    }
  
    return (
      <div className="reply-wrapper">
        <div className="reply-image">
          <img src={displayImage} alt=""/>
        </div>
        <div className="reply-body">
          <div className="reply-content">
            <div className="author-name">
              <Link to="/">{`${firstname} ${lastname}`}</Link>
              {/* <span>posted a reply</span> */}
            </div>
            <div className="comment"> { text } </div>
          </div>
          <div className="reply-actions">
            <span onClick={onReplyLike} className="action"> {liked ? 'liked' : 'like'} </span>
            <span className="space-dot">&middot;</span>
            <span className="action"> {likes.length} likes </span>
            { userId === myprofile.user._id && (
                  <Fragment>
                    <span className="space-dot">&middot;</span>
                    <span onClick={() => removeReply(postId, commentId, _id)} className="action"> remove reply </span>
                  </Fragment>
            )}
          </div>
        </div>
      </div>
    )
};

export default PostReply
