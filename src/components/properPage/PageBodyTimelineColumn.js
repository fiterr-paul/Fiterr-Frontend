import TextareaAutosize from 'react-autosize-textarea';
import React, {Fragment, useContext} from 'react';

import Posts from './Posts';
import NewPost from './NewPost'

import PageContext from '../../context/page/pageContext';
import AuthContext from '../../context/auth/authContext';



const PageBodyTimelineColumn = ({ posts }) => {

  const { currentPage: { trainers, pageOwner, contentCreators } } = useContext(PageContext);  
  const { user: { _id } } = useContext(AuthContext);  

  console.log('POOOOOSTS', posts);
  
      return(
        <>
        {/* LEFT COL - PROFILE TIMELINE */}
          <div className="timeline-wrapper">
            
            { (trainers.includes(_id) || (_id === pageOwner) || (contentCreators.includes(_id))) && <NewPost /> }

            <Posts posts={posts}/>

          </div>
        </>
      )
    
};

export default PageBodyTimelineColumn