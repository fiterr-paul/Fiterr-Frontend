import React, { useContext, useEffect } from 'react'

import PostContext from '../../context/post/postContext';

import MyPostItem from './MyPostItem';


const MyPosts = () => {

    const postContext = useContext(PostContext)
    const { myPosts, getUserPosts } = postContext;

    useEffect(() => {
        getUserPosts();
    }, []);

    if(myPosts) {
        return (
            <div className="user-posts">
                {myPosts.map((post, index) => (
                    <MyPostItem key={index} post={post} />
                ))}
            </div>
        )
    } else {
        return (
            <div>
                You have no posts
            </div>
        )
    }
    // <div>
    //     {myPosts ? (<h1>There are my posts</h1>) : <h1>Need to make a post</h1> }
    // </div>
}


{/* <div className="user-posts">
    {myPosts.map((post, index)=> {
        return(
            <div key={index}>
                <h4 className="postTitle">{post.title}</h4>
                <p className="content">{post.content}</p>
                <p className="likes">{post.likes.length()}</p>
                <p className="postDate">{post.postedAt}</p>
            </div>
        )
    })}
</div> */}

export default MyPosts


