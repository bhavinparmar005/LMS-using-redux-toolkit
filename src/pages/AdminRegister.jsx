import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function AdminRegister() {
 let nav= useNavigate()
  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const adminData = (e) => {
    let name = e.target.name
    let value = e.target.value

    setAdmin((pre) => ({ ...pre, [name]: value }))

  }


  const hendaleSubmit = (e) => {
    e.preventDefault()
    if (admin.password !== admin.confirmPassword) {

      Swal.fire({
        position: "center",
        icon: "info",
        title: "Password and Confirm Password not match",
        showConfirmButton: true,

      });

      setAdmin({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } else {
      localStorage.setItem('registrationadmin', JSON.stringify(admin))
      // console.log(admin);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successfull',
        showConfirmButton: false,
        timer: 2000
      });

      setAdmin({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      setTimeout(() => {
        nav('/adminlogin')
      }, 1900);
    }

  }
  return (
    <>

      <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4"> Admin Register</h2>
            <form onSubmit={hendaleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required name='name' value={admin.name} onChange={adminData} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={admin.email} onChange={adminData} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={admin.password} onChange={adminData} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" required name='confirmPassword' value={admin.confirmPassword} onChange={adminData} />
              </div>
              <button type="submit" className="btn btn-primary w-100"> Register</button>
            </form>
            <p className="text-center mt-3">Already have an account? <Link to={`/adminlogin`}>Login</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminRegister
