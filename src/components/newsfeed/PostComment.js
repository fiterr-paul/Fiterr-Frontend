import React from 'react'
import { Link } from 'react-router-dom';
import PostReply from './PostReply';
import PostReplyForm from './PostReplyForm';

import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';


const PostComment = () => {
    return (
      <div className="post-comment">
        <div className="comment-wrapper">
          <div className="comment-image">
            <img src={profileImgFatBastard} alt=""/>
          </div>
          <div className="comment-body">
            <div className="comment-content-wrapper">
              <div className="comment-content">
                <div className="author-name">
                  <Link to="/">fat bastard</Link>
                  <span>posted a comment</span>
                </div>
                <div className="comment">
                  Don't worry Paul, you're just "mentally challenged"! Kind of like how I am horozontally challenged!
                </div>
              </div>
              <div className="post-options">
                <i className="fas fa-ellipsis-h"></i>
              </div>
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

export default PostComment
