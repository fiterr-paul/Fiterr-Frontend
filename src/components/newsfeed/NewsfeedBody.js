import React, { Fragment } from 'react'
import NewsfeedBodyTimeline from './NewsfeedBodyTimeline';
import NewsfeedBodyWidgets from './NewsfeedBodyWidgets';
import StickyBox from "react-sticky-box";

const NewsfeedBody = () => {
    return (
      <Fragment>
        <div className="newsfeed-body-container">
          {/* LEFT COL - PROFILE TIMELINE */}
          <NewsfeedBodyTimeline />
          {/* RIGHT COL - PROFILE INFO WIDGETS */}
          <StickyBox offsetTop={70} offsetBottom={0}>
            <NewsfeedBodyWidgets />
          </StickyBox>
        </div>
      </Fragment>
    )
  };

export default NewsfeedBody
