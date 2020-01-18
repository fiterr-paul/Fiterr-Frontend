import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ user }) => {
    console.log('Search item user:', user);

    const { username, _id } = user;

    // check if a username exists, cause that will be the :id param for the profile route, otherwise it will be the user _id
    // console.log(username, _id);

    let id;
    if(username) {
        id = username;
    } else {
        id = _id;
    }

    // console.log('We have the id:', id);

    return (
        <div>
            <Link to={`/${id}`}>{user.firstname} {user.lastname}</Link>
        </div>
    )
}

export default SearchItem
