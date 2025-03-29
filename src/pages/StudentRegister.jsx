import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function StudentRegister() {

  let nav = useNavigate()
  const [allRegisterStudent ,setAllRegisterStudent] =useState( JSON.parse(localStorage.getItem('')) || [])
  let totalStudents = JSON.parse(localStorage.getItem("studentData")) || [];
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    console.log(totalStudents);

  }, [])


  const studentData = (e) => {
    let name = e.target.name
    let value = e.target.value
    setStudent((pre) => ({ ...pre, [name]: value }))
  }
  const submitData = (e) => {
    e.preventDefault()


    let findName = totalStudents.find((val) => {
      return (
        val.name == student.name && val.email == student.email
      )
    })

    if (findName) {
      if(student.password !== student.confirmPassword){
        console.log("Password is not match");
        
      } else{

         let finalList = [...allRegisterStudent,student]
         setAllRegisterStudent(finalList)
         localStorage.setItem('RegisterStudentData', JSON.stringify(finalList));
        console.log(finalList);
      }
    } 
    else {
      console.log("Admin not student define");
    }

    setStudent({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4"> Student Register</h2>
            <form onSubmit={submitData}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required name='name' value={student.name} onChange={studentData} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={student.email} onChange={studentData} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={student.password} onChange={studentData} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" required name='confirmPassword' value={student.confirmPassword} onChange={studentData} />
              </div>
              <button type="submit" className="btn btn-primary w-100"> Register</button>
            </form>
            <p className="text-center mt-3">Already have an account? <Link to={`/studentlogin`}>Login</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentRegister
