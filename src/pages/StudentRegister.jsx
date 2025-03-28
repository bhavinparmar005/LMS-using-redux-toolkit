import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function StudentRegister() {

  let nav = useNavigate()
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const[multiStudent,setMultiStudent]=useState(JSON.parse(localStorage.getItem('registrationStudent')) ||[])
  const studentData = (e) => {
    let name = e.target.name
    let value = e.target.value
    setStudent((pre) => ({ ...pre, [name]: value }))
  }
  const submitData = (e) => {
    e.preventDefault()
    if (student.password !== student.confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Password and Confirm Password not match",
        showConfirmButton: true,
        
      });
      
      setStudent({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } else {
      
      // setMultiStudent([...multiStudent,student] )
      let allStudent = [...multiStudent,student]
      setMultiStudent(allStudent)
      localStorage.setItem('registrationStudent', JSON.stringify(allStudent))
      // console.log(allStudent);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successfull',
        showConfirmButton: false,
        timer: 2000
      });

      setStudent({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      setTimeout(() => {
        nav('/studentlogin')
      }, 1900);
    }
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
                <input type="password" className="form-control" id="password" placeholder="Enter password" required  name='password' value={student.password} onChange={studentData}/>
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
