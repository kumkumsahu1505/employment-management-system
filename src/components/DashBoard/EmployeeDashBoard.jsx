import React from 'react'
import Header from '../others/header'
import Task from '../others/Task'
import TaskList from '../../TaskList/TaskList'
export default function EmployeeDashBoard({data}) {
  return (
    <div className='bg-gray-800 h-screen p-10 ' >
        <Header data={data}/>
        <Task data={data}/>
        <TaskList data={data}/>
    </div>
  )
}
