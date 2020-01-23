import React from 'react'
import PageBodyServices from './PageBodyServices'
import coverImage from '../../components/assets/media/sports-bike.jpg';

const PageHeader = (props) => {
    const {currentPage, pageRole} = props

    return (
      <div className="col-profile">
        <div className="profile-header-container">
          <div className="cover-image-wrapper">
            <div className="cover-image">
              <div className="cover-image-gradient">
              </div>
              <div className="image-update">
                <i className="fas fa-camera"></i>
                <h3>update cover photo</h3>
              </div>
              <img src={coverImage} alt=""/>
            </div>
          </div>
          <div className="page-actions-container">
            <div className="page-actions-wrapper">
              <button type="button" value="">
                <i className="fas fa-rss"></i>
                <span> follow </span>
                <i className="fas fa-caret-down"></i>
              </ button>
            </div>
          </div>
        </div>
        {/* <PageBodyTimeline /> */}
        {/* <PageBodyAbout /> */}
        <PageBodyServices currentPage={currentPage} pageRole={pageRole}/>
        {/* <PageBodyTrainers /> */}
        {/* <PageBodyPhotos /> */}
      </div>
    )
};
export default PageHeader