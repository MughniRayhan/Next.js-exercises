import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='col-span-3 bg-gray-800 min-h-screen p-4'>
                <h2 className='font-bold'>Dashboard</h2>
                <ul>
                    <li>User Dashboard</li>
                    <li>Admin Dashboard</li>
                </ul>
            </div>
            <div className='col-span-9 p-4'>
                {children}
            </div>
        </div>
    </div>
  )
}
