import React, { Fragment } from 'react';
import TimelinePost from './TimelinePost';

const Posts = ({ posts }) => {

    return (
        <Fragment>
          {posts.map((post, index) => (
            <TimelinePost key={index} post={post} />
          ))}
        </Fragment>
    )
}

export default Posts
