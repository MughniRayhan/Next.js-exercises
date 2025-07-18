import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav>
          <ul className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
    </div>
  )
}
