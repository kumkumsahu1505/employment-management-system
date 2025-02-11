import React from 'react'

export default function NewTask({color,title,date,description,category}) {
  return (
    <div className={`flex-shrink-0
        h-full w-[300px] bg-${color} rounded-xl p-5`}>
          <div className='flex justify-between  items-center'>
            <h3 className='bg-red-800 px-3 py-1 text-white text-sm font-semibold rounded-sm '>{category}</h3>
            <h3 className='text-white text-sm font-semibold'>{date}</h3>
          </div>
          <h2 className='text-white
           text-2xl mt-5 font-bold'>{title}</h2>
          <p className='text-sm mt-2 text-white '>{description} </p>
          <div className='flex justify-between mt-5'>
            <button className='bg-yellow-700 py-1 px-2 text-sm text-white rounded-xl w-full'>Accept Task</button>
            
          </div>  
        </div>
  )
}
