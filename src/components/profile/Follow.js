import React, { useContext, useState, Fragment } from 'react';

import { findIsFollowing } from '../../utils/Utils';

import ProfileContext from '../../context/profile/profileContext';

const Follow = ({ userId }) => {

    console.log('the user Id is: ', userId);

    const { profile, follow, unfollow } = useContext(ProfileContext);
    const { following } = profile;
    // console.log('the following array is', following);
    console.log('the profile', profile)
    const [isFollowing, setIsFollowing] = useState(following && following.includes(userId)); 

    console.log('isFollowing', isFollowing);

    const onClick = () => {
        if(!isFollowing) {
            console.log('follow');
            follow(userId); 
            setIsFollowing(true);
        } else {
            console.log('unfollow');
            unfollow(userId);
            setIsFollowing(false);
        }
    }

    return (
        <Fragment>
            <button onClick={onClick} className="follow" type="button" value="">
                { isFollowing ? (
                    <Fragment>
                        <i className="fas fa-check"></i>
                        <span> following </span>
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <i className="fas fa-rss"></i>
                        <span> follow </span>
                    </Fragment>
                )}
            </ button>
        </Fragment>
    )
}

export default Follow
