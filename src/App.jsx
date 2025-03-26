import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminRegister from './pages/AdminRegister'
import StudentLogin from './pages/StudentLogin'
import StudentRegister from './pages/StudentRegister'
import AdminPage from './pages/AdminPage'
import StudentPage from './pages/StudentPage'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminregister' element={<AdminRegister />} />
          <Route path='/studentlogin' element={<StudentLogin />} />
          <Route path='/studentregister' element={<StudentRegister />} />
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='/studentpage' element={<StudentPage />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/editstudent' element={<EditStudent />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
