import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentLogin() {
  let nav =useNavigate()
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="col-md-6 col-lg-4 col-sm-8 ">
          <div className="card p-4 shadow-lg rounded-4">
            <h2 className="text-center mb-4">Student Login</h2>
            <form >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email"  required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password"  required />
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
