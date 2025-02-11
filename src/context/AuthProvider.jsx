import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();

export default function AuthProvider({children}) {
  //  localStorage.clear();
    const [userData, setUserData] = useState(null);
    
   useEffect(() => {
    const {employees,admin} = getLocalStorage();
     setUserData({admin,employees})
   }, [])
   
   
  return (
    <div>
     <AuthContext.Provider value={userData} >
        {children}
     </AuthContext.Provider>
    </div>
  )
}
