import React, { useContext, useEffect, Fragment } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import TimelinePosts from '../newsfeed/TimelinePosts';
import TimelinePostPhoto from '../newsfeed/TimelinePostPhoto';
import Spinner from '../layout/Spinner';


import NewPost from '../posts/NewPost';
import Posts from '../posts/Posts';

import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';

import PostContext from '../../context/post/postContext';


const NewsfeedBodyTimeline = () => {

    const { posts, getNewsfeed, clearPostState } = useContext(PostContext);

    useEffect(() => {
      getNewsfeed();

      return () => {
        clearPostState();
      }
    })


    if(!posts) {
      return (
        <Fragment>
          <h1>Loading posts...</h1>
          <Spinner />
        </Fragment>
      )
    } else {

    return(
      <>
      {/* LEFT COL - NEWSFEED TIMELINE */}
        <div className="timeline-wrapper">
          <NewPost />

          {/* <Posts posts={posts} /> */}

          <TimelinePostPhoto />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
          <TimelinePosts />
        </div>
      </>
    )
    }
};

export default NewsfeedBodyTimeline
