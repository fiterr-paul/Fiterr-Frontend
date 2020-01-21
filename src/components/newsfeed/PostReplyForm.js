import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';

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

export default PostReplyForm
