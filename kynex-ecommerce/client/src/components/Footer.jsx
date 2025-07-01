import React from 'react'

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white p-6 text-center mt-10'>
      <p className='text-xl font-bold'>Kynex</p>
      <p className='mb-4'>We deliver results</p>
      <div className='flex justify-center space-x-6'>
        <a href='#'><img src='/images/youtube-icon.svg' alt='YouTube' /></a>
        <a href='#'><img src='/images/instagram-icon.svg' alt='Instagram' /></a>
        <a href='#'><img src='/images/facebook-icon.svg' alt='Facebook' /></a>
        <a href='#'><img src='/images/tiktok-icon.svg' alt='TikTok' /></a>
      </div>
    </footer>
  )
}