import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


function StudentLogin() {

  let nav = useNavigate()

  const allStudentData = JSON.parse(localStorage.getItem('studentData')) || [];

  
  
  const studentRegisterData = JSON.parse(localStorage.getItem('registrationStudent')) || [];

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

    let logedinStudent = studentRegisterData.find((val) => {
      return (
        val.email === student.email && val.password === student.password
      )
    })

    if (logedinStudent === undefined) {

      Swal.fire({
        title: " Please Check your Password ! Or If You Not Registered Yet ! Then Please Resiter First",
        icon: "error",
        draggable: true,
        showConfirmButton: false,
        timer: 2000
      });

      setTimeout(() => {
        nav('/studentregister')

      }, 1900);

    } else {

      let authenticatedStudent = allStudentData.find((val)=>{
        return (
          val.name === logedinStudent.name && val.email === logedinStudent.email 
        )
      })

      console.log(authenticatedStudent);

      if (authenticatedStudent !== undefined) {

        localStorage.setItem('studentLogin', JSON.stringify(authenticatedStudent))

        Swal.fire({
          title: " Login Successfully !",
          icon: "success",
          draggable: true,
          showConfirmButton: false,
          timer: 1900
        });
  
  
        setTimeout(() => {
          nav('/studentpage')
        }, 2000);
        
      } else{

        Swal.fire({
          title: " Please Check your Password ! Or If You Not Registered Yet ! Then Please Resiter First",
          icon: "error",
          draggable: true,
          showConfirmButton: false,
          timer: 2000
        });

      }

      

      

    }



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
