import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
export default function AdminDashBoard({data}) {
    return (
        <div className='bg-gray-800 w-full h-screen p-10 '>
            <Header data={data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}
