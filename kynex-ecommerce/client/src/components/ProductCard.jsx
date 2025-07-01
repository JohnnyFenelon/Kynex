
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className='border p-4 rounded'>
      <img src={product.image} alt={product.title} className='mb-2' />
      <h2 className='text-xl font-semibold mb-1'>{product.title}</h2>
      <p className='mb-2'>{product.description}</p>
      <p className='font-bold'>
        $ {product.priceUSD} {product.type === 'subscription' ? '/mo' : ''} ({product.priceDOP} DOP)
      </p>
      <Link to={'/product/' + product.id} className='mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded'>
        View
      </Link>
    </div>
  )
}
