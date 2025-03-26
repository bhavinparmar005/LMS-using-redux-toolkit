import React from 'react'

function EditStudent() {
  return (
   <>
 <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12">
                        <div className="p-4 border rounded shadow-sm">
                            <h2 className="mb-4 text-center">Edit Student Data</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" maxLength={10} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="male" defaultValue="Male" required />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="female" defaultValue="Female" required />
                                        <label htmlFor="female" className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="other" defaultValue="Other" required />
                                        <label htmlFor="other" className="form-check-label">Other</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course" className="form-label">Course</label>
                                    <select className="form-select" id="course" required>
                                    <option value>Select a Course</option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="Front-End Development">Front-End Development</option>
                                        <option value="Back-End Development">Back-End Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Game Developmentt">Game Developmentt</option>
                                        <option value="UI & UX Design">UI & UX Design</option>
                                        <option value="Graphics Design">Graphics Design</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="C.C.C">C.C.C</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Edit Student Data</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default EditStudent
