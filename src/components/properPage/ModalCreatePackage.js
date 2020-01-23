import React, {useState, useEffect, useContext} from 'react'
import TextareaAutosize from 'react-autosize-textarea';
import Modal from 'react-modal';
import PageContext from '../../context/page/pageContext'
import AuthContext from '../../context/auth/authContext'
import {useParams} from 'react-router'

const ModalCreatePackage = (props) => {
    const {open, close, customStyles} = props;
    const pageContext = useContext(PageContext)
    const authContext = useContext(AuthContext)
    
    const {currentPage, createPackage, getPage, roleOnPage, findRole} = pageContext
    const {loadUser, isAuthenticated} = authContext
    const {handle} = useParams()
    useEffect(() => {
      if(!isAuthenticated){ loadUser() } 
      if(!currentPage){getPage(handle)}
      if(!roleOnPage){findRole(handle)}
      // if(currentPage.pageHandle !== handle){
      //     getPage(handle) 
      //     findRole(handle)
      // }
      // eslint-disable-next-line
    }, [isAuthenticated, currentPage ])

    const [thisPackage, setPackage] = useState({
      pageID: '',
      title: '',
      description: '',
      numberOfSessions: '',
      price: ''
  })
  const {title, description, numberOfSessions, price} = thisPackage
  const onChange = (e) => {
      setPackage({...thisPackage, [e.target.name]: e.target.value})
  }
  const onSubmit = async(e)=>{
      e.preventDefault()
      let body = new FormData()
      body.append('pageID', currentPage._id)
      body.append('title', title)
      body.append('description', description)
      body.append('numberOfSessions', numberOfSessions)
      body.append('price', price)
      console.log('body', body)
      createPackage(body)
      close()
      // history.push(`/page/${currentPage.pageHandle}`)

  }

    

    if(!currentPage){
      return(null)
    }
    
    return (
      <>
        <Modal id="modal-create-package"
          isOpen={open}
          onRequestClose={close}
          style={customStyles}
          contentLabel="Example Modal"
          >
            <div className="create-package">
              <div className="title">
                <h3>create a new training package</h3>
              </div>
              <form>
                <div className="row">
                  <div className="col-left">
                    <p>package title:</p>
                  </div>
                  <div className="col-right">
                    <input type="text" autoComplete="off" name="title" placeholder="Enter a title for this package ..." required value={title} onChange={onChange}/>
                  </div>
                </div>
                <div className="row description">
                  <div className="col-left">
                    <p style={{marginTop: "6px"}}>description:</p>
                  </div>
                  <div className="col-right">
                    <TextareaAutosize  type="textarea" autoComplete="off" name="description" placeholder="Enter a description for this package ..." required value={description} onChange={onChange}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-left">
                    <p># of sessions:</p>
                  </div>
                  <div className="col-right">
                    <input type="number" autoComplete="off" name="numberOfSessions" placeholder="ie: 10" required value={numberOfSessions} onChange={onChange}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-left">
                    <p>price:</p>
                  </div>
                  <div className="col-right">
                  <input type="number" autoComplete="off" name="price" placeholder="$ 0.00" required value={price} onChange={onChange}/>
                  </div>
                </div>
                <div className="row actions">
                  <div className="col-left">
                    <button type="button" className="delete">delete</button>
                  </div>
                  <div className="col-right">
                  <button type="button" className="cancel" onClick={close}>cancel</button>
                  <button type="submit" className="submit" onClick={onSubmit}>Add Package </button>
                  </div>
                </div>
                
              </form>
            </div>
        </Modal>
      </>
    )
};
export default ModalCreatePackage