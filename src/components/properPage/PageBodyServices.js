import PackageCard from './PackageCard'
import React, { useState } from 'react'
import {useParams} from 'react-router'
import Modal from 'react-modal';
import ModalCreatePackage from './ModalCreatePackage'


const PageBodyServices = (props) => {
  const {handle} = useParams()
  const [page, setPage] = useState({
    pageAbout: ''
  })
  const currentPage = props.currentPage
  const role = props.pageRole

  // eslint-disable-next-line
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
    if(role==='Owner' || role==='Trainer'){
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