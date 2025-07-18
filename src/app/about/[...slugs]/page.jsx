import React from 'react'

export default async function AboutSlugsPages({params}) {
    const p = await params;
    console.log(p)
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-red-400 text-3xl font-bold'>404 not found </p>
    </div>
  )
}
