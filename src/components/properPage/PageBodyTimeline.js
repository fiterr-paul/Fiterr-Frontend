import React from 'react'
import PageBodyTimelineColumn from './PageBodyTimelineColumn'
import PageBodyWidgets from './PageBodyWidgets'
import StickyBox from "react-sticky-box";
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

const PageBodyTimeline = () => {
    return (
      <div className="profile-body-container">
        {/* LEFT COL - PROFILE TIMELINE */}
        <PageBodyTimelineColumn />
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <StickyBox offsetTop={70} offsetBottom={0}>
          <PageBodyWidgets />
        </StickyBox>
      </div>
    )
};

export default PageBodyTimeline