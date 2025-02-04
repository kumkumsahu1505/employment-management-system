import React from 'react'

export default function Header() {
  return (
      <div className='flex justify-between   items-start '>
          <h2 className='text-white text-xl'>Hello, <br /><span className='text-2xl font-bold'>kukmkum</span> </h2>
          <button className='text-white px-5 py-1 rounded bg-red-900 text-lg font-medium
            '>Log Out</button>
      </div>
  )
}

