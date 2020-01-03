
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