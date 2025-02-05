import React from 'react'

export default function TaskList() {
  return (
    <div id='taskList' className='h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap  mt-10 rounded-t-2xl py-5 overflow-x-auto'>
      <TaskListComponent color='green-800' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
      <TaskListComponent color='yellow-800' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
      <TaskListComponent color='zinc-700' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
      <TaskListComponent color='yellow-800' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
      <TaskListComponent color='green-900' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
      <TaskListComponent color='gray-700' title='Make the youTube video'
        discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit quidem ipsam numquam, iusto animi!"} />
    </div>
  )
}

export function TaskListComponent({ color, title, discription }) {
  return (
    <div className={`flex-shrink-0
    h-full w-[300px] bg-${color} rounded-xl p-5`}>
      <div className='flex justify-between  items-center'>
        <h3 className='bg-red-800 px-3 py-1 text-white text-sm font-semibold rounded-sm '>High</h3>
        <h3 className='text-white text-sm font-semibold'>26 Nov 2025</h3>
      </div>
      <h2 className='text-white
       text-2xl mt-5 font-bold'>{title}</h2>
      <p className='text-sm mt-2 text-white '>{discription} </p>

    </div>
  )
}
