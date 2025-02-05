import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    {/* <EmployeeDashBoard/> */}
  </StrictMode>,
)
