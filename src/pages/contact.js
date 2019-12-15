import React from 'react';
import './assets/scss/contact.scss';


const Contact = () => {
  return (
    <>
      <section className="body contact">
        <div className="head-banner">
          <div className="image-overlay">
            <div className="container">
              <div className="title">
                <h1>contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='form-container'>
            <form className="contact">
              <div className="field-row title">
                <h3>Tell us your details</h3>
              </div>
              <div className="field-row input name">
                <div className="width-50">
                  <input type="text" name="firstname" autoComplete="off" placeholder="First Name" required/>
                </div>
                <div className="width-50">
                  <input type="text" name="lastname" autoComplete="off" placeholder="Surname" required/>
                </div>
              </div>
              <div className="field-row input">
                <input type="email" name="email" autoComplete="off" placeholder="Email Address" required/>
              </div>
              <div className="field-row title">
                <h3>What's your enquiry about?</h3>
              </div>
              <div className="field-row input">
                <textarea  type="textarea" name="enquiry" rows="10" autoComplete="off" placeholder="Write your enquiry here ..." required/>
              </div>
              <div className="field-row button">
                <button type="submit" value="submit"> send enquiry </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};


export default Contact;
