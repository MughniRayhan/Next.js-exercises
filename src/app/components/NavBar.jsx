import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav>
          <ul className="flex items-center justify-between p-4 bg-gray-800 text-white px-8">
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
}
