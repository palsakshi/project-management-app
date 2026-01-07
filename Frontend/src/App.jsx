import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import createTask from './admin/createTask'
import  Dashboard from  './admin/Dashboard'
import ManageTask from './admin/ManageTask'
import ManageUser from './admin/ManageUser'
import PrivateRoute from './routes/PrivateRoute'
import Userdashboard from './users/Userdashboard'
import UserDetails from './users/UserDetails'

function App() {
  return (
    <div className='font-weight:300'>
       <h2>Hello world</h2>
     <BrowserRouter>
     <Routes>
     
<Route path='/login' element={<Login/>}/>
<Route path='/SignUp' element={<SignUp/>}/>

<Route element ={<PrivateRoute allowedRoles={["admin"]}/>}>
<Route path="/admin/create" element={<createTask/>}/>
<Route  path="/admin/dashboard" element={<Dashboard/>}/>
<Route path ="/admin/manageTask" element ={<ManageTask/>}/>
<Route path="/admin/ManageUser" element ={<ManageUser/>}/>

</Route>
<Route element={<PrivateRoute allowedRoles={['Users']}/>}>
<Route path="/user/dashboard" element ={<Userdashboard/>}/>
<Route path ="/user/Details/:id" element ={<UserDetails/>}/>
<Route path ="/user/Task" element ={<userTask/>}/>
</Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

