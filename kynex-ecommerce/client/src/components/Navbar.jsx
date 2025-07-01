import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
      <Link to='/' className='text-2xl font-bold'>Kynex</Link>
      <div className='space-x-4'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </nav>
  )
}
