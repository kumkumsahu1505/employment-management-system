import React, { useEffect,useState } from 'react'


export default function Header({data}) {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setUserName(data.name);
  }, [data]); 

 
  const logOut = () => {
    localStorage.setItem('loggedInUser', null);
    window.location.reload();
  }

  return (
      <div className='flex justify-between   items-start '>
          <h2 className='text-white text-xl'>Hello, <span className='text-3xl'>👋🏻</span> <br /><span className='text-2xl font-bold'>{userName}</span> </h2>
          <button onClick={logOut} className='text-white px-5 py-1 rounded bg-red-900 text-lg font-medium
            '>Log Out</button>
      </div>
  )
}

