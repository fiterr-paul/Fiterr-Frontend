import React from 'react'
import { Link } from 'react-router-dom';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';

const PostReply = () => {
    return (
      <div className="reply-wrapper">
        <div className="reply-image">
          <img src={profileImgPaul} alt=""/>
        </div>
        <div className="reply-body">
          <div className="reply-content-wrapper">
            <div className="reply-content">
              <div className="author-name">
                <Link to="/">paul meier</Link>
                <span>posted a reply</span>
              </div>
              <div className="comment">
                Fuck you ... you bastard!
              </div>
            </div>
            <div className="post-options">
              <i className="fas fa-ellipsis-h"></i>
            </div>
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

export default PostReply
