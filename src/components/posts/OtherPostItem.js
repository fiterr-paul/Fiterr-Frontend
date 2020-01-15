import React,  { useContext } from 'react';

import { convertToAusTime } from '../../utils/Utils';

const OtherPostItem = (props) => {
    const { post } = props;

    const dateTime = convertToAusTime(post.postedAt);

    return (
        <div className="user-post">
            <h4 className="postTitle">{post.title}</h4>
            {post.image ? <img width="100px" src={post.image}/> : '' }
            <p className="content">{post.content}</p>
            <p className="likes">Likes: {post.likes.length}</p>
            <p className="postDate">Posted at:</p>
            <p>{dateTime.date}</p>
            <p>{dateTime.time}</p>
        </div>
    )
}

export default OtherPostItem
