import React, { useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import profileImgPaul from '../assets/media/paul-900x900.jpg';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';


const NewPost = () => {

  // we can use either the useLocation or the userParams hook to access the username
  // const location = useLocation();
  // console.log('location', location);

  // console.log('At new post', username);
  
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  
  const { username } = useParams();
  const { makePost } = postContext;
  const { user: { username: myusername } } = authContext;

  let placeholder;
  username === myusername ? placeholder = 'Share something with your followers ...' : placeholder = 'Post to PERSONS timeline!'

  // console.log('myusername', myusername);

  const [post, setPost] = useState({
    postDescription: '',
    image: null
  });

  const [fileName, setFileName] = useState('');

  const { postDescription, image } = post

  const onChange = async (e) => {
    setPost({...post, postDescription: e.target.value})
  }

  const onFileChange = async (e) => {
    setPost({...post, [e.target.name]: e.target.files[0]})
    const fileName = e.target.value.split('\\').pop();
    setFileName(fileName);
  }

  const onSubmit = async (e) => {
    e.preventDefault(); // dont need this because onSubmit is not in the form element

    let body = new FormData();
    body.append('postDescription', postDescription)
    body.append('image', image);

    makePost(body);

    setPost({
        postDescription: '',
        image: null,
    })
    setFileName('');

    // getUserPosts();  // we are going to update the post directly into the state via dispatch to the reducer
  }



  return (
      <div className="post-box-wrapper">
        <div className="post-box-header">
          <div className="icon-bgr">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <h3> create post </h3>
        </div>
        <div className="post-box-body">
          <div className="profile-image">
            <img src={profileImgPaul} alt=""/>
          </div>
          <div className="post-input-field">
            <textarea onChange={onChange} type="textarea" name="post" rows="3" autoComplete="off" placeholder={placeholder} value={postDescription} required/>
          </div>
        </div>
        <div className="post-box-actions">
          <div className="post-options">
            <div className="new-post-field">
              <input type="file" name="image" id="image" className='inputfile' onChange={onFileChange}/>
              <label htmlFor="image" className="input-file-label">
                  <i className="fas fa-file-upload"></i><span className='input-file-name'>{ fileName ? fileName : 'Choose a file' }</span>
              </label>
            </div>
            <button type="button" value="post-options">
              <i className="fas fa-users"></i>
              <span>followers</span>
              <i className="fas fa-caret-down"></i>
            </ button>
          </div>
          <div className="post-button">
            <button onClick={onSubmit} type="submit" value="submit"> post </button>
          </div>
        </div>
      </div>
  )
}

export default NewPost
