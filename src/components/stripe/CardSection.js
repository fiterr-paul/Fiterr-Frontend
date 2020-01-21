import React, {useState, useContext} from 'react';
import  {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement} from 'react-stripe-elements';
import './MyCardElement.scss'
import AuthState from '../../context/auth/authContext'
import {Link} from 'react-router-dom'
import PageState from '../../context/page/pageContext'



const CardSection = (props) => {
    
    const authState = useContext(AuthState)
    const pageState = useContext(PageState)
    const {user, isAuthenticated, loadUser} = authState
    const {currentPackage, getPackage, buyPackage, lastCharge} = pageState
    const [receiptUrl, setReceiptUrl] = useState(null)
    console.log(props)

    const {pack, handle, number, stripe} = props   
    console.log(number)
    console.log('pack', pack)

    if(!isAuthenticated){
        loadUser()
    }
    
    const handleSubmit = async event => {
        event.preventDefault()
        let body = new FormData
        
        const { token } = await stripe.createToken()
        const amount = pack.price.toString().replace('.', '')
        const source = token.id
        const receipt_email = user.email
        body.append('amount', amount)
        body.append('source', source)
        body.append('receipt_email', receipt_email)
        

        await buyPackage(handle, pack._id, body)
  }
  if (lastCharge) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={lastCharge.receipt_url}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    )
  }
  console.log(pack)
  return (
    <div className="checkout-form">
      <p>Amount: ${pack.price}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCVCElement />
        </label>
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  )
}

export default injectStripe(CardSection)