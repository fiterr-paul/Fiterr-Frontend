import React, {useState, useContext, useRef } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'
import PostContext from '../../context/post/postContext'

const NewPost = (props) => {
    const profileContext = useContext(ProfileContext)
    const authContext = useContext(AuthContext)
    const postContext = useContext(PostContext)

    const { profile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext
    const { makePost, getUserPosts } = postContext
    
    if(!isAuthenticated){ loadUser() }

    const [post, setPost] = useState({
        postTitle: '',
        postDescription: '',
        image: null,
    })

    const [fileName, setFileName] = useState('');

    const {postTitle, postDescription, image, userID} = post

    const onSubmit = async (e) => {
        e.preventDefault();

        let body = new FormData();
        body.append('postTitle', postTitle)
        body.append('postDescription', postDescription)
        body.append('image', image);

        makePost(body);    // dont need the await here

        setPost({
            postTitle: '',
            postDescription: '',
            image: null,
        })
        setFileName('');
        // getUserPosts();
    }

    const onChange = async (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const onFileChange = async (e) => {
        setPost({...post, [e.target.name]: e.target.files[0]})
        const fileName = e.target.value.split('\\').pop();
        console.log(fileName);
        setFileName(fileName);
    }

    return(
        <>
            <form encType="multipart/form-data" name="file-upload" onSubmit={onSubmit} className="new-post">
                <div>
                    <div className="new-post-field">
                        <label>Title</label>
                        <input type="text" name="postTitle" id="postTitle" value={postTitle} onChange={onChange}/>
                    </div>
                    <div className="new-post-field">
                        <label>Description</label>
                        <input type="text" name="postDescription" id="postDescription" value={postDescription} onChange={onChange}/>
                    </div>
                    <div className="new-post-field">
                        <input type="file" name="image" id="image" className='inputfile' onChange={onFileChange}/>
                        <label htmlFor="image" className="input-file-label">
                            <i className="fas fa-file-upload"></i><span className='input-file-name'>{ fileName ? fileName : 'Choose a file' }</span>
                        </label>
                    </div>
                    <div className="new-post-field">
                        <input type="submit" value="Post" className="new-post-submit"/> 
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewPost