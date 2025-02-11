import React, { useContext, useState } from 'react'


export default function Login({handleLogin}) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    function handleSubmit(e){
       e.preventDefault();
       handleLogin(email,password)
       setemail("");
       setpassword("");
    }
    
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900 '>
        <div className='border-2 border-green-900 px-18 py-30 bg-gray-800'>
            <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col gap-4' >
                <input type="email" 
                required placeholder='enter your email'
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                className='border-2 bg-transparent placeholder:text-gray-600  border-green-900 rounded-full px-4 py-2 text-white'
                />
                <input type="password"
                    placeholder='enter your password'
                    required
                    onChange={(e)=>setpassword(e.target.value)
                    }
                    value={password}
                     className={`border-2 bg-transparent placeholder:text-gray-600  rounded-full 
                     text-white px-4 py-2 $
                   border-green-900`}
                />
                <div className='flex flex-row text-white'>
                    <input type="checkbox" />
                    <p>Remember Me</p>
                    <a href="" className='pl-4 text-red-900'>Forget password</a>
                </div>
                <button className='bg-green-900 text-white rounded-full mt-6 py-2'>Log In</button>
            </form>
        </div>
    </div>
  )
}
