import React, { Fragment } from 'react';
import TimelinePost from './TimelinePost';

const MyPosts = ({ posts }) => {

    console.log('here are my posts', posts);

    return (
        <Fragment>
          {posts.map((post, index) => (
            <TimelinePost key={index} post={post} />
          ))}
        </Fragment>
    )
}

export default MyPosts
