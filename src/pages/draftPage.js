// import React, { useContext, useState, useEffect } from 'react';
// import { withRouter } from 'react-router';
// import { Link, useHistory } from 'react-router-dom';
// import AuthContext from '../context/auth/authContext';
// import './assets/scss/index.scss';
// import StickyBox from "react-sticky-box";
// import TextareaAutosize from 'react-autosize-textarea';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// import profileImgPaul from '../components/assets/media/paul-900x900.jpg';
// import nyePaul from '../components/assets/media/nye.jpg';
// import coverImage from '../components/assets/media/sports-bike.jpg';
// import profileImgFatBastard from '../components/assets/media/fatbastard-185x185.jpg';
// import pageImg1 from '../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
// import pageImg2 from '../components/assets/media/logo-livefit_livelean-640x640.png';
// import pageImg3 from '../components/assets/media/logo-28_day_kickstart-1080x1080.png';


// const draftPage = () => {
//   return (
//     <section className="body page">
//       <div className="container">
//         {/* LEFT COL - NAVIGATION */}
//         <StickyBox offsetTop={60} offsetBottom={10}>
//           <PageLeftNav />
//         </StickyBox>

//         {/* RIGHT COL - PROFILE */}
//         <PageHeader />
//       </div>
//     </section>
//   )
// };

















// // const TimelinePosts = () => {
  
// //   const postOptionsDropdownHandler = (e) => {
// //     const element = document.getElementById("post-options-dropdown");
// //     if (element.style.display === "none") {
// //       element.style.display = "flex";
// //     } else if (element.style.display === "flex") {
// //       element.style.display = "none";
// //     }
// //   };

// //   const postOptionsDropdownRemove = (e) => {
// //     const menu = e.target.parentNode.childNodes[1]
// //     menu.style.display = "none"
// //   }

// //   return (
// //     <div className="timeline-post-wrapper">
// //       <div className="header">
// //         <div className="profile-image">
// //           <img src={profileImgPaul} alt=""/>
// //         </div>
// //         <div className="post-info">
// //           <div className="post-title">
// //             <h3><Link to='/'>paul meier</Link> <span>made a post</span></h3>
// //           </div>
// //           <div className="post-date">
// //             <div className="date">
// //               december 22, 2019 <span style={{textTransform: "lowercase"}}>at</span> 11:23am
// //               </div>
// //             <div className="post-options">
// //               <button type="button" value="post-options">
// //                 <i className="fas fa-globe-americas"></i>
// //                 <i className="fas fa-caret-down"></i>
// //               </ button>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="post-options">
// //           <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} onBlur={postOptionsDropdownRemove} >
// //             <i className="fas fa-ellipsis-h"></i>
// //           </button>
// //           <div id="post-options-dropdown" style={{display: "none"}} className="options-dropdown-wrapper caret">
// //             <div className="options-dropdown">
// //               <ul>
// //                 <li>edit post</li>
// //                 <li>delete post</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="body">
// //         <div className="post-content">
// //           <span>
// //             I wish I was better at coding JavaScript and React.  🤦🏼‍♂️ Then perhaps maybe I wouldn't feel like such a dumb-fuck! 🤪
// //           </span>
// //         </div>
// //       </div>
// //       <div className="post-actions-wrapper post-actions-info">
// //         <div className="social-actions">
// //           <div className="icon-wrapper like">
// //             <div className="icon-bgr">
// //               <i className="far fa-thumbs-up"></i>
// //             </div>
// //             {/* <span>1 person likes this</span> */}
// //             <span>15 people like this</span>
// //           </div>
// //           <div className="icon-wrapper comment">
// //             <div className="icon-bgr">
// //               <i className="far fa-comment-alt"></i>
// //             </div>
// //             <span>2 comments</span>
// //           </div>
// //           <div className="icon-wrapper share">
// //             <div className="icon-bgr">
// //               <i className="far fa-share-square"></i>
// //             </div>
// //             <span>3 shares</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="post-actions-wrapper">
// //         <div className="social-actions">
// //           <button type="button" className="social-like" name="" value="social-like">
// //             <i className="far fa-thumbs-up"></i>
// //             <span>like</span>
// //           </button>
// //           <button type="button" className="social-comment" name="" value="social-comment">
// //             <i className="far fa-comment-alt"></i>
// //             <span>comment</span>
// //           </button>
// //           <button type="button" className="social-share" name="" value="social-share">
// //             <i className="far fa-share-square"></i>
// //             <span>share</span>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="post-comments-wrapper">
// //         <PostComment />
// //         <div className="post-comment-form-wrapper">
// //           <div className="post-comment-form">
// //             <div className="form-image">
// //               <img src={profileImgPaul} alt=""/>
// //             </div>
// //             <div className="form-field">
// //               <form>
// //                 <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" placeholder="Write a new comment ..." />
// //                 <button type="submit" label="search" className="comment-btn"> post 
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // const TimelinePostPhoto = () => {

// //   const postOptionsDropdownHandler = (e) => {
// //     const element = document.getElementById("post-options-dropdown");
// //     if (element.style.display === "none") {
// //       element.style.display = "flex";
// //     } else if (element.style.display === "flex") {
// //       element.style.display = "none";
// //     }
// //   };

// //   const postOptionsDropdownRemove = (e) => {
// //     const menu = e.target.parentNode.childNodes[1]
// //     menu.style.display = "none"
// //   }

// //   return (
// //     <div className="timeline-post-wrapper">
// //       <div className="header">
// //         <div className="profile-image">
// //           <img src={profileImgPaul} alt=""/>
// //         </div>
// //         <div className="post-info">
// //           <div className="post-title">
// //             <h3><Link to='/'>paul meier</Link> <span>uploaded a photo</span></h3>
// //           </div>
// //           <div className="post-date">
// //             <div className="date">
// //               december 31, 2019 <span style={{textTransform: "lowercase"}}>at</span> 11:59pm
// //             </div>
// //             <div className="post-options">
// //               <button type="button" value="post-options">
// //                 <i className="fas fa-globe-americas"></i>
// //                 <i className="fas fa-caret-down"></i>
// //               </ button>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="post-options">
// //           <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} onBlur={postOptionsDropdownRemove} >
// //             <i className="fas fa-ellipsis-h"></i>
// //           </button>
// //           <div id="post-options-dropdown" style={{display: "none"}} className="options-dropdown-wrapper caret">
// //             <div className="options-dropdown">
// //               <ul>
// //                 <li>edit post</li>
// //                 <li>delete post</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="body">
// //         <div className="post-content">
// //           <span>
// //             Happy New Year family and friends 🥳❤️
// //           </span>
// //           <div className="image-upload">
// //             <img src={nyePaul} alt=""/>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="post-actions-wrapper post-actions-info">
// //         <div className="social-actions">
// //           <div className="icon-wrapper like">
// //             <div className="icon-bgr">
// //               <i className="far fa-thumbs-up"></i>
// //             </div>
// //             <span>1 person likes this</span>
// //             {/* <span>15 people like this</span> */}
// //           </div>
// //           <div className="icon-wrapper comment">
// //             <div className="icon-bgr">
// //               <i className="far fa-comment-alt"></i>
// //             </div>
// //             <span>0 comments</span>
// //           </div>
// //           <div className="icon-wrapper share">
// //             <div className="icon-bgr">
// //               <i className="far fa-share-square"></i>
// //             </div>
// //             <span>0 shares</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="post-actions-wrapper">
// //         <div className="social-actions">
// //           <button type="button" className="social-like" name="" value="social-like">
// //             <i className="far fa-thumbs-up"></i>
// //             <span>like</span>
// //           </button>
// //           <button type="button" className="social-comment" name="" value="social-comment">
// //             <i className="far fa-comment-alt"></i>
// //             <span>comment</span>
// //           </button>
// //           <button type="button" className="social-share" name="" value="social-share">
// //             <i className="far fa-share-square"></i>
// //             <span>share</span>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="post-comments-wrapper">
// //         {/* <PostComment /> */}
// //         <div className="post-comment-form-wrapper">
// //           <div className="post-comment-form">
// //             <div className="form-image">
// //               <img src={profileImgPaul} alt=""/>
// //             </div>
// //             <div className="form-field">
// //               <form>
// //                 <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" placeholder="Write a new comment ..." />
// //                 <button type="submit" label="search" className="comment-btn"> post 
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // const PostComment = () => {
// //   return (
// //     <div className="post-comment">
// //       <div className="comment-wrapper">
// //         <div className="comment-image">
// //           <img src={profileImgFatBastard} alt=""/>
// //         </div>
// //         <div className="comment-body">
// //           <div className="comment-content-wrapper">
// //             <div className="comment-content">
// //               <div className="author-name">
// //                 <Link to="/">fat bastard</Link>
// //                 <span>posted a comment</span>
// //               </div>
// //               <div className="comment">
// //                 Don't worry Paul, you're just "mentally challenged"! Kind of like how I am horozontally challenged!
// //               </div>
// //             </div>
// //             <div className="post-options">
// //               <i className="fas fa-ellipsis-h"></i>
// //             </div>
// //           </div>
// //           <div className="comment-actions">
// //             <span className="action"> like </span>
// //             <span className="space-dot">&middot;</span>
// //             <span className="action"> reply </span>
// //           </div>
// //           <PostReply />
// //           <PostReplyForm />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // const PostReply = () => {
// //   return (
// //     <div className="reply-wrapper">
// //       <div className="reply-image">
// //         <img src={profileImgPaul} alt=""/>
// //       </div>
// //       <div className="reply-body">
// //         <div className="reply-content-wrapper">
// //           <div className="reply-content">
// //             <div className="author-name">
// //               <Link to="/">paul meier</Link>
// //               <span>posted a reply</span>
// //             </div>
// //             <div className="comment">
// //               Fuck you ... you bastard!
// //             </div>
// //           </div>
// //           <div className="post-options">
// //             <i className="fas fa-ellipsis-h"></i>
// //           </div>
// //         </div>
// //         <div className="reply-actions">
// //           <span className="action"> like </span>
// //           <span className="space-dot">&middot;</span>
// //           <span className="action"> reply </span>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // const PostReplyForm = () => {
// //   return (
// //     <div className="post-reply-form-wrapper">
// //       <div className="post-reply-form">
// //         <div className="form-image">
// //           <img src={profileImgPaul} alt=""/>
// //         </div>
// //         <div className="form-field">
// //           <form>
// //             <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" placeholder="Write a reply ..." />
// //             <button type="submit" label="search" className="comment-btn"> reply 
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };






// const ModalCreatePackage = (props) => {

//   const {open, close, customStyles} = props;
  
//   return (
//     <>
//       <Modal id="modal-create-package"
//         isOpen={open}
//         onRequestClose={close}
//         style={customStyles}
//         contentLabel="Example Modal"
//         >
//           <div className="create-package">
//             <div className="title">
//               <h3>create a new training package</h3>
//             </div>
//             <form>
//               <div className="row">
//                 <div className="col-left">
//                   <p>package title:</p>
//                 </div>
//                 <div className="col-right">
//                   <input type="text" autoComplete="off" placeholder="Enter a title for this package ..." required/>
//                 </div>
//               </div>
//               <div className="row description">
//                 <div className="col-left">
//                   <p style={{marginTop: "6px"}}>description:</p>
//                 </div>
//                 <div className="col-right">
//                   <TextareaAutosize  type="textarea" autoComplete="off" placeholder="Enter a description for this package ..." required/>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-left">
//                   <p># of sessions:</p>
//                 </div>
//                 <div className="col-right">
//                 <input type="number" autoComplete="off" placeholder="ie: 10" required/>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-left">
//                   <p>price:</p>
//                 </div>
//                 <div className="col-right">
//                 <input type="number" autoComplete="off" placeholder="$ 0.00" required/>
//                 </div>
//               </div>

//               <div className="row actions">
//                 <div className="col-left">
//                   <button type="button" className="delete">delete</button>
//                 </div>
//                 <div className="col-right">
//                 <button type="button" className="cancel" onClick={close}>cancel</button>
//                   <button type="button" className="submit" >save &amp; close</button>
//                 </div>
//               </div>
              
//             </form>
//           </div>
//       </Modal>
//     </>
//   )
// };

// const PackageCard = () => {
//   return (
//     <div className="card">
//       <div className="purchase">
//       <button type="button" value=""> purchase </button>
//       </div>
//       <div className="row">
//         <div className="col-left">
//           <p>package title:</p>
//         </div>
//         <div className="col-right">
//         <p>10 personal training sessions</p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-left">
//           <p>description:</p>
//         </div>
//         <div className="col-right">
//         <p>10 one-on-one appointments / personal training sessions</p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-left">
//           <p># of sessions:</p>
//         </div>
//         <div className="col-right">
//         <p>10</p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-left">
//           <p>price:</p>
//         </div>
//         <div className="col-right">
//         <p>$ 900.00</p>
//         </div>
//       </div>
//     </div>
//   )
// };








// const NewComponent = () => {
//   return (
//     <>
//     </>
//   )
// };


// export default draftPage;
