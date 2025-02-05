import React from 'react'

export default function CreateTask() {
  return (
    <div className='relative flex flex-row items-start justify-between bg-gradient-to-b from-gray-800 to-gray-900 h-[65%] w-full mt-4 '>

    <div className=' w-1/2 h-[50%] px-4 '>
        <form action="" className='text-white gap-2 flex flex-col mt-5 h-[50%] w-[75%]'>

            <label for="Task Tittle" className='text-white text-xl mt-5'>Task Tittle</label>
            <input type="text" id='Task Tittle' className='bg-gray-700 text-gray-200 placeholder:text-zinc-400 py-1  px-3 rounded-xl border-2 outline-none 
 ' placeholder='enter tittle for your Task' />

            <label for='Date' className='text-white text-xl '>Date</label>
            <input type="Date" id='Date' className='bg-gray-700  py-1  px-3 rounded-xl outline-none text-gray-200 border-2'
            />
            <label for='AssignTo' className='text-white text-xl '>Assign to</label>
            <input type="text" id='AssignTo' className='bg-gray-700 placeholder:text-zinc-400 py-1  px-3 rounded-xl outline-none text-gray-200 border-2
 ' />
            <label for='Category' className='text-white text-xl '>Category</label>
            <input type="text" id='Category' className='bg-gray-700 py-1  px-3 placeholder:placeholder:text-zinc-400 rounded-xl outline-none text-gray-200 border-2
 ' placeholder='Designs, development, etc....' />

        </form>
    </div>
    <div className=' w-2/5 h-full flex flex-col px-4 py-4 gap-2 '>
        <label for="Description" className='text-white text-xl'>Description</label>
        <textarea rows={4} id='Description' className='bg-gray-700 text-gray-200 placeholder:text-zinc-400 py-1  px-3 rounded-xl  outline-none border-2 h-full
                ' placeholder='Detail description of task (Max 500 words)'></textarea>
        <div className='flex justify-center'>
            <button className='text-white text-xl font-medium bg-green-800 px-3 py-3 w-full rounded-xl'>Create Task</button>
        </div>
    </div>

</div>
  )
}
