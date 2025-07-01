import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/CheckoutForm'

export function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
      <img src={product.image} alt={product.title} className='mb-4' />
      <p className='mb-4'>{product.description}</p>
      <p className='mb-4 font-bold'>
        $ {product.priceUSD} {product.type === 'subscription' ? '/mo' : ''}
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm product={product} />
      </Elements>
    </div>
  )
}