import React, { useState, useContext, useEffect } from 'react';

import PostContext from '../../context/post/postContext';

import Spinner from '../layout/Spinner';
import OtherPostItem from '../posts/OtherPostItem';

const OtherPosts = (props) => {
    
    const { viewingUserId } = props;

    const postContext = useContext(PostContext);
    const { viewingPosts, getViewingUserPosts } = postContext;

    console.log('other posts', viewingUserId);

    useEffect(() => {
        getViewingUserPosts(viewingUserId);
    }, []);

    //need a method that gets that users posts from the database
    const [posts, setPosts] = useState([]);

    if(!viewingPosts){
        return (
            <div>
                Fetching users posts...
                <Spinner />
            </div>
        )
    } else {
        return (
            <div className="user-posts">
                {viewingPosts.map((post, index) => (
                    <OtherPostItem key={index} post={post} />
                ))}
            </div>
        )
    }
}

export default OtherPosts
