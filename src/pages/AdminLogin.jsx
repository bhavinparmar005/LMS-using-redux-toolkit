import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function AdminLogin() {
  let nav = useNavigate()

    useEffect(()=>{
      let login = JSON.parse(localStorage.getItem('adminlogin')) || false;
      if(login){
        nav('/adminpage');
      }
  },[])
  const [adminRegisterData, setAdminRegisterData] = useState(JSON.parse(localStorage.getItem('registrationadmin')) || [])
  const [admin, setAdmin] = useState({
     email: '',
    password: ''
  })
  
  

  const adminData = (e) => {
    let name = e.target.name
    let value = e.target.value

    setAdmin((pre) => ({ ...pre, [name]: value }))

  }
  
  const hendaleSubmit = (e) => {
    e.preventDefault()

  
    if (adminRegisterData.email === admin.email && adminRegisterData.password === admin.password) {
      
      localStorage.setItem('adminlogin', JSON.stringify(admin))
      Swal.fire({
        title: " Login Successfully !",
        icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1900
          });
          

          setTimeout(() => {
            nav('/adminpage')
          }, 2000);
      
      
      
    }else{

      Swal.fire({
        title: " your Password Not Match ! && first Register Then Login",
        icon: "error",
        draggable: true,
        showConfirmButton: false,
        timer: 2000
      });

      setTimeout(() => {
        nav('/adminregister')
        
      }, 1900);
      
      
    }

    setAdmin({
      email: '',
      password: ''
    })

  

  

   


  }
  // console.log(adminRegisterData);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8 ">
          <div className="card p-4 shadow-lg rounded-4">
            <h2 className="text-center mb-4">Admin Login</h2>
            <form onSubmit={hendaleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' value={admin.email} onChange={adminData} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required name='password' value={admin.password} onChange={adminData} />
              </div>
              <button type="submit" className="btn btn-primary w-100" >Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <Link to={`/adminregister`}>Register</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
