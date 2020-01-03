import React, { useContext, useState, Fragment, useEffect } from 'react';

import PostContext from '../../context/post/postContext';
import Spinner from '../layout/Spinner';
import NewsfeedPostItem from './NewsfeedPostItem';

const FollowingPosts = () => {

    const postContext = useContext(PostContext);
    const { getNewsfeedPosts } = postContext;

    const [newsfeedPosts, setNewsfeedPosts] = useState(null);

    useEffect(() => {
        const fetchNewsfeed = async() => {
            let posts = await getNewsfeedPosts();
            console.log('---', posts)
            setNewsfeedPosts(posts);
        }
        fetchNewsfeed();
    }, [])
    // console.log('newsfeed', newsfeedPosts);
    
    if(!newsfeedPosts) {
        return (
            <Fragment>
                <h1>Loading newsfeed...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        return (
            <div className="newsfeed-posts">
                {newsfeedPosts.map((post, index) => (
                    <NewsfeedPostItem key={index} post={post} />
                ))}
            </div>
        )
    }

    // const posts = followingPosts.map(function(post) {
    //     return(
    //     <div>
    //         <h1>{post.title}</h1>
    //         <p>{post.description}</p>
    //         <img src={post.image} alt="Post Image"/>
    //     </div>
    //     ) 
    // })

    // return (
    //     <div>
    //         {followingPosts ? <h1>Posts</h1> : <h1>Follow more people to see posts!</h1> }
    //     </div>
    // )
}

export default FollowingPosts
