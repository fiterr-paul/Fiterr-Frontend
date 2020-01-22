import React from 'react'
import PageBodyServices from './PageBodyServices'
import PageBodyTimeline from './PageBodyTimeline'
import PageBodyAbout from './PageBodyAbout'
import PageBodyTrainers from './PageBodyTrainers'
import PageBodyPhotos from './PageBodyPhotos'
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

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
        <PageBodyTimeline />
        {/* <PageBodyAbout /> */}
        {/* <PageBodyServices currentPage={currentPage} pageRole={pageRole}/> */}
        {/* <PageBodyTrainers /> */}
        {/* <PageBodyPhotos /> */}
      </div>
    )
};
export default PageHeader