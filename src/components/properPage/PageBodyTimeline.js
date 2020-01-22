import React, { useState, useContext, useEffect, Fragment } from 'react'
import PageBodyTimelineColumn from './PageBodyTimelineColumn'
import PageBodyWidgets from './PageBodyWidgets'
import StickyBox from "react-sticky-box";

import Spinner from '../layout/Spinner';

import PostContext from '../../context/post/postContext';
import PageContext from '../../context/page/pageContext';


const PageBodyTimeline = () => {

  // debugger

    const { posts, getPagePosts, clearPostState } = useContext(PostContext);
    const { currentPage } = useContext(PageContext);

    console.log('current page', currentPage)

    useEffect(() => {
      getPagePosts(currentPage._id);

      return () => {
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
      return (
        <div className="profile-body-container">
          {/* LEFT COL - PROFILE TIMELINE */}
          <PageBodyTimelineColumn posts={posts} />
          {/* RIGHT COL - PROFILE INFO WIDGETS */}
          <StickyBox offsetTop={70} offsetBottom={0}>
            <PageBodyWidgets />
          </StickyBox>
        </div>
      )
    }
};

export default PageBodyTimeline
