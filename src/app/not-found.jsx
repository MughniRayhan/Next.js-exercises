import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-red-400 text-3xl font-bold'>404 not found </p>
      <Link href='/'><button className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'>Go to Home</button></Link>
    </div>
  )
}
