import React, { useContext, useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';

import NewPost from '../posts/NewPost';
import Posts from '../posts/Posts';

import PostContext from '../../context/post/postContext';


const NewsfeedBodyTimeline = () => {

    const { posts, fetchNewsfeed, clearPostState } = useContext(PostContext);

    useEffect(() => {
      fetchNewsfeed();

      return () => {
        clearPostState();
      }
      // eslint-disable-next-line
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
        <>
        {/* LEFT COL - NEWSFEED TIMELINE */}
          <div className="timeline-wrapper">
            <NewPost />

            <Posts posts={posts} />

            {/* <TimelinePostPhoto />
            <TimelinePosts /> */}

          </div>
        </>
      )
    }
};

export default NewsfeedBodyTimeline
