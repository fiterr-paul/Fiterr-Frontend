import React, { useContext, useState } from 'react';

import { findIsFollowing } from '../../utils/Utils';

import ProfileContext from '../../context/profile/profileContext';

const Follow = (props) => {

    const profileContext = useContext(ProfileContext);
    const { profile, follow, unfollow } = profileContext;
    // console.log('We have access to our loaded profile from parent component', profile)

    const { viewingProfileId } = props;

    const [isFollowing, setIsFollowing] = useState(findIsFollowing(profile.following, viewingProfileId)); 

    // we access the viewinguserId from the prop, but can also use context to get it
    console.log('isFollowing', isFollowing);

    // NOTE: even though the button changes, there is a slight delay until the back end is updated with the right following/follower id
    const onClick = () => {
        if(!isFollowing) {
            console.log('follow');
            follow(viewingProfileId); 
            setIsFollowing(true);
        } else {
            console.log('unfollow');
            unfollow(viewingProfileId);
            setIsFollowing(false);
        }
    }

    return (
        <div onClick={onClick} className="follow-btn">
            <p>{ isFollowing ? 'following' : 'follow' }</p>
            { isFollowing ? (<i className="fas fa-check"></i>) : (<i className="fas fa-plus"></i>) }
        </div>
    )
}

export default Follow
