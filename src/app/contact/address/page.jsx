import Link from 'next/link'
import React from 'react'

export default function AddressPage() {

  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <h1>Our Address</h1>
      <p>123 Main St, Anytown, USA</p>
      <Link href='/contact'><button type='button' className='btn border p-2 mt-3'>Go Back</button></Link>
    </div>
  )
}
