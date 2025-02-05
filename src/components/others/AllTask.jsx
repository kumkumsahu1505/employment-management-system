import React from 'react'

export default function AllTask() {
  return (
    <div id='AllTaskId' className='bg-gradient-to-b from-gray-800 to-gray-900 p-5 rounded mt-5 overflow-auto h-40'>
       <Tasks color="green-900"/>
       <Tasks color="zinc-700"/>
       <Tasks color="blue-900"/>
       <Tasks color="yellow-800"/>
       <Tasks color="purple-900"/>
    </div>
  )
}

export function Tasks({color}) {
  return (
    <div className={`bg-${color} py-2 px-4 flex justify-between rounded mb-2 gap-4 text-white`}>
    <h2 >Kumkum</h2>
    <h3>Create UI design for ems</h3>
    <h5>Status</h5>
</div>
  )
}
