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
import AllStudentPrint from './pages/AllStudentPrint'
import New from './pages/New'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<h1> page not Fount</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/adminregister' element={<AdminRegister />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/editstudent' element={<EditStudent />} />
          <Route path='/studentlogin' element={<StudentLogin />} />
          <Route path='/studentregister' element={<StudentRegister />} />
          <Route path='/studentpage' element={<StudentPage />} />
          <Route path='/allstudent' element={<AllStudentPrint />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
