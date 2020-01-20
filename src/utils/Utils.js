
export const convertToAusTime = (time) => {
    // console.log(time);
    const [datePart, timePart] = time.split('T');
    // console.log(date, newTime);

    const [yyyy, mm, dd] = datePart.split('-');
    const newDate = `${dd}/${mm}/${yyyy}`;
    // console.log(newDate);

    const newTime = timePart.split('.').shift();
    // console.log(splitTime);

    return { time: newTime, date: newDate };
}

export const findIsFollowing = (following, viewingUserId) => {
    console.log(following);
    return following.includes(viewingUserId);
}

export const likesText = (numLikes) => {
    if(numLikes === 0 || numLikes > 1){
        return `${numLikes} people like this`;
    } else {
        return `1 person likes this`;
    }
}

// need to also bring in the persons profile youre one to get the name
export const placeholderText = (username, myusername) => {
    if(username === myusername) {
        return 'Share something with your followers ...';
    } else {
        return 'Post to PERSONS timeline';
    }
}
