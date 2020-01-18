import React, { Fragment, useContext, useState, useEffect } from 'react';
import NewPost from './NewPost';
import Posts from './Posts';
import Spinner from '../layout/Spinner';

import { useParams } from 'react-router-dom';
import PostContext from '../../context/post/postContext';


const ProfileBodyTimeline = ({ profile, ourProfile }) => {

  const { user: { _id } } = profile;
  
  const postContext = useContext(PostContext);
  const { myPosts, getMyPosts, otherPosts, getOtherPosts, clearPostState } = postContext;
  
  useEffect(() => {
    console.log('useEffect');
    if(ourProfile) { getMyPosts() } else { getOtherPosts(_id) };

    return () => {
      console.log('unmounting of the PROFILE BODY TIMELINE component')
      clearPostState();
    }
  }, [])

  if ((ourProfile && !myPosts) || (!ourProfile && !otherPosts)) {    
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
          <Posts profile={profile} posts={ourProfile ? myPosts : otherPosts} />
        </div>
      </Fragment>
    )
  }
};

export default ProfileBodyTimeline
