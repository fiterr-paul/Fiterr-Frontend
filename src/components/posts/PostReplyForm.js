import React, { useContext, useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import PostContext from '../../context/post/postContext';
import ProfileContext from '../../context/profile/profileContext';


const PostReplyForm = ({ postId, commentId }) => {

    const { addReply } = useContext(PostContext);
    const { profile: { displayImage } } = useContext(ProfileContext);
    const [text, setText] = useState('');

    const onReply = e => {
        e.preventDefault();
        console.log('going to reply');
        addReply(postId, commentId, { text });
        setText('');
    }

    return (
      <div className="post-reply-form-wrapper">
        <div className="post-reply-form">
          <div className="form-image">
            <img src={displayImage} alt=""/>
          </div>
          <div className="form-field">
            <form>
              <TextareaAutosize onChange={e => setText(e.target.value)} value={text} type="textarea" autoComplete="off" className="comment-field" placeholder="Write a reply ..." />
              <button onClick={onReply} type="submit" label="search" className="comment-btn"> reply 
              </button>
            </form>
          </div>
        </div>
      </div>
    )
};

export default PostReplyForm
