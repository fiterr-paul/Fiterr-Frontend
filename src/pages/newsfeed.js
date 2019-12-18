import React from 'react'
import NewPost from '../components/posts/NewPost'

const newsfeed = () => {
    getPosts() // post context method to get posts of people user follows

    return (
        <>
           <section className="body">
                <div className="container">
                    <h1>Newsfeed</h1>
                    <div>
                        <NewPost />
                    </div>
                </div>
            </section> 
        </>
    )
}

export default newsfeed
