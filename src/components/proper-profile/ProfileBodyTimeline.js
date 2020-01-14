import React, { Fragment, useContext, useState, useEffect } from 'react';
import NewPost from './NewPost';
import MyPosts from './MyPosts';
import Spinner from '../layout/Spinner';

import { useParams } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';


const ProfileBodyTimeline = () => {

  const { username } = useParams();

  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);

  const { user: { username: myusername } } = authContext;
  const { myPosts, getUserPosts, viewingPosts, getViewingUserPosts } = postContext;

  const [ourProfile, setOurProfile] = useState((username === myusername));

  useEffect(() => {
    ourProfile ? getUserPosts() : getViewingUserPosts();
  }, [])


  if (!myPosts && !viewingPosts) {
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

          {ourProfile ? (<MyPosts posts={myPosts}/>) : (<MyPosts posts={viewingPosts}/>) }

        </div>
      </Fragment>
    )
  }
};

export default ProfileBodyTimeline
