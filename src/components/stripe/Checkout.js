import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CardSection from './CardSection'

const Checkout = ({location: {state}}) => {
    const currentPackage = state.pack
    console.log('currentpack',currentPackage)
    const handle = state.handle
    console.log('handle', handle)
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return (
      <StripeProvider apiKey="pk_test_uBLdOYBsjfRQtUZExxC7pkw4">
        <Elements>
          <CardSection pack={currentPackage} handle={handle} />
        </Elements>
      </StripeProvider>
    )
}
  
  export default Checkout