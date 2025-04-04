import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { editStudent } from "../Feature/StudentDataSlice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function EditStudent() {

    let location = useLocation()
    let nav = useNavigate()
    let dispatch = useDispatch()
    const [studentData, setStudentData] = useState({
        id: "" || location.state.id,
        name: "" || location.state.name,
        email: "" || location.state.email,
        phone: "" || location.state.phone,
        gender: "" || location.state.gender,
        dataofbirth: "" || location.state.dataofbirth,
        course: "" || location.state.course,
        feestatus: "" || location.state.feestatus
    })

    const inputData = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
            return;
        }

        if (name === "phone" && !/^\d{0,10}$/.test(value)) {
            return;
        }

        setStudentData((pre) => ({ ...pre, [name]: value }))

    }

    const hendalSumitData = (e) => {
        e.preventDefault();

        dispatch(editStudent(studentData))

        setStudentData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            dataofbirth: "",
            course: "",
            feestatus: ""
        })

        setTimeout(() => {
            nav('/adminpage')
        }, 1900);

        Swal.fire({
            title: "Student Edit Successfully !",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 2000
        });


    }


    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12">
                        <div className="p-4 border rounded shadow-sm">
                            <h2 className="mb-4 text-center">Edit Student Data</h2>
                            <form onSubmit={hendalSumitData}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" required name='name' value={studentData.name} onChange={inputData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" placeholder='Enter Student Email' className="form-control" id="email" required name='email' value={studentData.email} onChange={inputData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" maxLength={10} required name='phone' value={studentData.phone} onChange={inputData} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="male" value="Male" checked={studentData.gender == "Male"} required onChange={inputData} />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="female" value="Female" checked={studentData.gender == "Female"} required onChange={inputData} />
                                        <label htmlFor="female" className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="other" value="Other" checked={studentData.gender == "Other"} required onChange={inputData} />
                                        <label htmlFor="other" className="form-check-label">Other</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" required name='dataofbirth' value={studentData.dataofbirth} onChange={inputData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course" className="form-label">Course</label>
                                    <select className="form-select" id="course" required name='course' value={studentData.course} onChange={inputData}>
                                        <option value="" disabled selected>Select a Course</option>
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
                                <div className="mb-3">
                                    <label htmlFor="course" className="form-label">Fee Status</label>
                                    <select className="form-select" id="course" required name='feestatus' value={studentData.feestatus} onChange={inputData} >
                                        <option value="" disabled selected>Select status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Add Student Data</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditStudent
