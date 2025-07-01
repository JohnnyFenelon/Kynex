import React, { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <h2 className='text-2xl mb-4'>Login</h2>
      <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='border p-2 mb-2 w-full' />
      <input type='password' placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} className='border p-2 mb-4 w-full' />
      <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>Login</button>
    </form>
  )
}