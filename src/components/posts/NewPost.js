import React, {useState, useContext} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'
import PostContext from '../../context/post/postContext'

const NewPost = (props) => {
    const profileContext = useContext(ProfileContext)
    const authContext = useContext(AuthContext)
    const postContext = useContext(PostContext)

    const { profile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext
    const { makePost } = postContext
    
    if(!isAuthenticated){ loadUser() }
    const [post, setPost] = useState({
        postTitle: '',
        postDescription: '',
        image: null,
        userID: user._id
    })

    const {postTitle, postDescription, image, userID} = post

    const onSubmit = async (e) => {
        e.preventDefault()
        const body = new FormData()
        body.append('postTitle', postTitle)
        body.append('postDescription', postDescription)
        body.append('image', image)
        body.append('userID', userID)
        await makePost(body)
    }

    const onChange = async (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const onFileChange = async (e) => {
        setPost({...post, [e.target.name]: e.target.files[0]})
    }

    return(
        <>
            <form encType="multipart/form-data" name="file-upload" onSubmit={onSubmit}>
                <div>
                    <label >Post Title</label>
                    <input type="text" name="postTitle" id="postTitle" value={postTitle} onChange={onChange}/>
                    <label >Post Description</label>
                    <input type="text" name="postDescription" id="postDescription" value={postDescription} onChange={onChange}/>
                    <label >Upload an Image</label>
                    <input type="file" name="image" id="image" onChange={onFileChange}/>
                    <input type="submit" value="Submit"/> 
                </div>
            </form>
        </>
    )
}

export default NewPost