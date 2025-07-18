"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ContactPage() {
    const router = useRouter();
    const isLoggedIn = false; 
    const handleClick = () => {
        if(isLoggedIn){
            router.push('/contact/address');
        }
        else{
           router.push('/');
        }
    }
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <Link href="/contact/address" className='underline'><p>address page</p></Link>
      <button type='button' className='btn border p-2 mt-3' 
      onClick={handleClick}>Address Page</button>
    </div>
  )
}
