import React,  { useContext } from 'react';

import {logSomething, convertToAusTime} from '../../utils/Utils';

import PostContext from '../../context/post/postContext';


// need to bring in the post context and the remove post method

const MyPostItem = (props) => {
    const { post } = props;

    const dateTime = convertToAusTime(post.postedAt);

    const postContext = useContext(PostContext)
    const { removePost } = postContext;

    const onDeleteClick = () => {
        removePost(post._id)
    }   

    return (
        <div className="user-post">
            <h4 className="postTitle">{post.title}</h4>
            {post.image ? <img width="100px" src={post.image}/> : '' }
            <p className="content">{post.content}</p>
            <p className="likes">Likes: {post.likes.length}</p>
            <p className="postDate">Posted at:</p>
            <p>{dateTime.date}</p>
            <p>{dateTime.time}</p>
            <i className="far fa-trash-alt remove-post" onClick={onDeleteClick}></i>
        </div>
    )
}

export default MyPostItem
