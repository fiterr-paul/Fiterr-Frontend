import React, { Fragment } from 'react';
import TimelinePost from './TimelinePost';

const Posts = ({ profile, posts }) => {

    console.log('here are the posts', posts, 'here is the profile', profile);

    return (
        <Fragment>
          {posts.map((post, index) => (
            <TimelinePost key={index} post={post} profile={profile} />
          ))}
        </Fragment>
    )
}

export default Posts
