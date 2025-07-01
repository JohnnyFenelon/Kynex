import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Welcome to Kynex</h1>
      <p className='mb-4'>We deliver results</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}