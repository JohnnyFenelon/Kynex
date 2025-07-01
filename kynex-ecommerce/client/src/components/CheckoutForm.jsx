import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'

export default function CheckoutForm({ product }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { data } = await axios.post('http://localhost:4242/api/create-checkout-session', {
      priceId: product.id,
      mode: product.type === 'subscription' ? 'subscription' : 'payment'
    })
    await stripe.redirectToCheckout({ sessionId: data.sessionId })
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className='border p-2 mb-4' />
      <button type='submit' disabled={!stripe || loading} className='bg-blue-600 text-white px-4 py-2 rounded'>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  )
}