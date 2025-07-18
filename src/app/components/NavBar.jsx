"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname)
    if(!pathname.includes('dashboard')){
  return (
    <div>
      <nav className='bg-gray-800'>
          <ul className="flex items-center justify-between p-4  text-white px-8 w-96 mx-auto">
            <Link href="/">
               <li> Home </li>
            </Link>
            <Link href="/about">
              <li> About </li>
            </Link>
            <Link href="/contact">
              <li> Contact </li>
            </Link>
            <Link href="/services">
              <li> Services </li>
            </Link>
          </ul>
        </nav>
    </div>
  )
}else{
    return <></>
}
}
