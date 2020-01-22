import TextareaAutosize from 'react-autosize-textarea';
import React from 'react'


const PageBodyTimelineColumn = () => {
    return(
      <>
      {/* LEFT COL - PROFILE TIMELINE */}
        <div className="timeline-wrapper">
          <div className="post-box-wrapper">
            <div className="post-box-header">
  
              <div className="icon-bgr">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <h3> create post </h3>
          <div className="hr"></div>
          <input type="file" name="image" id="image" className='inputfile' />
          <label htmlFor="image" className="input-file-label">
              <i className="fas fa-camera"></i><span className='input-file-name'>upload photo/video</span>
          </label>
          </div>
            <div className="post-box-body">
              <div className="profile-image">
                {/* <img src={profileImgPaul} alt=""/> */}
              </div>
              <div className="post-input-field">
                <TextareaAutosize  type="textarea" name="post" autoComplete="off" placeholder="Share something on your page ..." required/>
              </div>
            </div>
            <div className="post-box-actions">
              <div className="post-options">
                <button type="button" value="post-options">
                  <i className="fas fa-users"></i>
                  <span>followers</span>
                  <i className="fas fa-caret-down"></i>
                </ button>
              </div>
              <div className="post-button">
                <button type="submit" value="submit"> post </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};
export default PageBodyTimelineColumn