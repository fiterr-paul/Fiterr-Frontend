import PackageCard from './PackageCard'
import React, {Fragment, useState, useContext, useEffect} from 'react'
import {useParams} from 'react-router'
import {useHistory, Link} from 'react-router-dom'
import PageContext from '../../context/page/pageContext'
import AuthContext from '../../context/auth/authContext'
import Modal from 'react-modal';
import ModalCreatePackage from './ModalCreatePackage'
import $ from 'jquery'
import request from '../../utils/axios-config'
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

const PageBodyServices = (props) => {
  const {handle} = useParams()
  const [page, setPage] = useState({
    pageAbout: ''
  })
  const pageContext = useContext(PageContext)
  const {updateAbout, roleOnPage, getPage, findRole, currentPackage, getPackage} = pageContext
  const authContext = useContext(AuthContext)
  const {isAuthenticated, loadUser} = authContext
  const currentPage = props.currentPage
  const role = props.pageRole

  const onChange = (e) => {
    setPage({...page, [e.target.name]: e.target.value})
  }
  
  Modal.setAppElement(document.getElementById('root'));

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const packageSetting = () => {
    if(role=='Owner' || role=='Trainer'){
        return(
          <div className="post-button">
              <button onClick={openModal} type="button" value=""> create package </button>
          </div>
        )
    }
}
  if(!currentPage){
    return null
  }
  const packageShow = () => {
    return (
      <>
        {currentPage.packages.map((pack, index) => (
          <PackageCard key={index} pack={pack} handle={handle} role={role}/>
        ))}
      </>
  )
    
  } 

  return (
    <div className="page-container services">
      <div className="container-wrapper">
        <div className="header">
          <div className="icon">  
            <div className="icon-bgr">
              <i className="fas fa-info-circle"></i>
            </div>
            <h3> services and packages </h3>
          </div>
          {packageSetting()}
        </div>
        <div className="body services">
          {packageShow()}
          <ModalCreatePackage id="modal-create-package" open={modalIsOpen} close={closeModal} customStyles={customStyles} />
        </div>
      </div>
    </div>
  )
};
export default PageBodyServices