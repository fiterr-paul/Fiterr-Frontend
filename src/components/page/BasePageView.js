import React, {Fragment} from 'react'

const BasePageView = (props) => {
    const currentPage = props.currentPage

    return(
        <Fragment>
            <div className="pageTitle">
                <h1>
                    TITLE:{currentPage.pageTitle}
                </h1>
            </div>

            <div className="pageLikes">
                <h3> Likes: {currentPage.likes.length}</h3>
            </div>

            <div className="description">
                <p>ABOUT:{currentPage.pageAbout}</p>
            </div>
            <div className="posts">
                {currentPage.posts.map((index, post)=>{
                    return(
                        <div key={index}>
                            <h3>{post.content}</h3>
                        </div>
                    )

                })}
            </div>
        </Fragment>
    )
}

export default BasePageView