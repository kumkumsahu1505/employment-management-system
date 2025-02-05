import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    {/* <EmployeeDashBoard/> */}
    <AdminDashBoard/>
  </StrictMode>,
)
