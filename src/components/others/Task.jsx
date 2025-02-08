import React from 'react'

export default function Task({data}) {
  return (
    <div className='flex justify-between mt-10 gap-5'>
       <TaskComponent taskType="New Task" color="zinc-700" taskNo="0"/>
       <TaskComponent color="green-900" taskType="Completed" taskNo="3"/>
       <TaskComponent color="gray-700" taskType="Accepted" taskNo="0"/>
       <TaskComponent color="yellow-800" taskType="Failed" taskNo="1"/>
    </div>
  )
}
export  function TaskComponent({color,taskNo,taskType}) {
  return (
    <div className={`w-[45%] bg-${color} py-6 px-9 rounded-xl`}>
            <h3 className='text-4xl text-white font-bold'>{taskNo}</h3>
            <p className='text-2xl text-white font-bold '>{taskType}</p>
       </div>
  )
}
