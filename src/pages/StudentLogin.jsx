import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


function StudentLogin() {

  let nav = useNavigate()



  let studentRegisterData = JSON.parse(localStorage.getItem('RegisterStudentData')) || [];

  const [student, setStudent] = useState(
    {
      email: '',
      password: ''
    }
  )

  const studentData = (e) => {

    let name = e.target.name
    let value = e.target.value

    setStudent((pre) => ({ ...pre, [name]: value }))

  }

  const hendaleSubmit = (e) => {
    e.preventDefault()

    // console.log(student);
    // console.log(studentRegisterData);

    let filterRegistarData = studentRegisterData.find((val) => {
      return (
        val.email === student.email && val.password === student.password
      )
    })

    if (filterRegistarData) {
      Swal.fire({
        title: " Login Successfully !",
        icon: "success",
        draggable: true,
        showConfirmButton: false,
        timer: 1900
      });
      console.log(filterRegistarData);

      localStorage.setItem('loginStudentData', JSON.stringify(filterRegistarData))

      setTimeout(() => {
        nav('/studentpage')
      }, 2000);


    } else {
      Swal.fire({
        title: " Admin has not added you yet ! Please, Login leter.",
        icon: "error",
        draggable: true,
        showConfirmButton: false,
        timer: 2000
      });
      setTimeout(() => {
        nav('/studentregister')
      }, 2000);

    }


    setStudent({
      email: '',
      password: ''
    })


  }













  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8 ">
          <div className="card p-4 shadow-lg rounded-4">
            <h2 className="text-center mb-4">Student Login</h2>
            <form onSubmit={hendaleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={student.email} onChange={studentData} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={student.password} onChange={studentData} />
              </div>
              <button type="submit" className="btn btn-primary w-100" >Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <Link to={`/studentregister`}>Register</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentLogin
