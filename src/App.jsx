import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminRegister from './pages/AdminRegister'
import StudentLogin from './pages/StudentLogin'
import StudentRegister from './pages/StudentRegister'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminregister' element={<AdminRegister/>}/>
      <Route path='/studentlogin' element={<StudentLogin/>}/>
      <Route path='/studentregister' element={<StudentRegister/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
