import React, { Fragment, useContext, useState, useEffect } from 'react';

// newPost and Posts needs to come from the posts folder
import NewPost from '../posts/NewPost';
import Posts from '../posts/Posts';

import Spinner from '../layout/Spinner';

import { useParams } from 'react-router-dom';
import PostContext from '../../context/post/postContext';


const ProfileBodyTimeline = ({ profile }) => {

  // debugger;

  const { user: { _id } } = profile;
  
  const postContext = useContext(PostContext);
  const { posts, getPosts, clearPostState } = postContext;
  
  useEffect(() => {
    getPosts(_id);
    return () => {
      console.log('unmounting of the PROFILE BODY TIMELINE component')
      clearPostState();
    }
  }, [])

  if(!posts) {
    return (
      <Fragment>
        <h1>Loading posts...</h1>
        <Spinner />
      </Fragment>
    )
  } else {

    return(
      <Fragment>
      {/* LEFT COL - PROFILE TIMELINE */}
        <div className="timeline-wrapper">
          <NewPost />
          <Posts posts={posts} />
        </div>
      </Fragment>
    )
  }
};

export default ProfileBodyTimeline
