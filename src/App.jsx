import React, { useEffect, useState ,  useContext } from 'react'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
export default function App() {
    useEffect(() => {
      setLocalStorage();
    getLocalStorage();
    }, )
    const [user, setUser] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const authData = useContext(AuthContext)

     useEffect(()=>{
      const LoggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(JSON.parse(LoggedInUser).role)
        setLoggedInUser(JSON.parse(LoggedInUser).data)}
     },[])
    const handleLogin=(email,password)=>{
        if (authData ) {
            const admin = authData.admin.find((a) => email == a.email && password == a.password)
            if(admin){
                setUser("admin");
                localStorage.setItem("loggedInUser",JSON.stringify({role:"admin",data:admin}))
                setLoggedInUser(admin);
            }
        
       
            const employee = authData.employees.find((e) => email == e.email && password == e.password)
           if(employee){
                setUser("employee");
                localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
                setLoggedInUser(employee);
            }
        }
        else {
            alert("invalid email and password");
        }
    }
  return (
    <>

    {!user?<Login handleLogin={handleLogin}/>:""}
    {user==='admin'?<AdminDashBoard data={loggedInUser} />:(user==='employee' ?<EmployeeDashBoard data ={loggedInUser}/>:null)}
    
    </>
  )
}
