import React from 'react'
import { Link } from 'react-router-dom'

function StudentRegister() {
  return (
  <>
    <div className="container d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-4 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4"> Student Register</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" required />
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
