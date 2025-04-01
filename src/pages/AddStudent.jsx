import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from "../Feature/StudentDataSlice";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddStudent() {
    let nav = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('adminlogin')) || false;
        if (!login) {
            nav('/');
        }
    }, []);

    const [studentData, setStudentData] = useState({
        id: Math.floor(Math.random() * 1000),
        name: "",
        email: "",
        phone: "",
        gender: "",
        dataofbirth: "",
        course: "",
        feestatus: ""
    });

    const inputData = (e) => {
        let { name, value } = e.target;

        if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
            return;
        }

        if (name === "phone" && !/^\d{0,10}$/.test(value)) {
            return;
        }

        setStudentData((prev) => ({ ...prev, [name]: value }));
    };

    const hendalSumitData = (e) => {
        e.preventDefault();
        dispatch(addStudent(studentData));

        setStudentData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            dataofbirth: "",
            course: "",
            feestatus: ""
        });

        setTimeout(() => {
            nav('/adminpage');
        }, 1900);

        Swal.fire({
            title: "Student Added Successfully!",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 2000
        });
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12">
                        <div className="p-4 border rounded shadow-sm">
                            <h2 className="mb-4 text-center">Add Student Data</h2>
                            <form onSubmit={hendalSumitData}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        required
                                        name='name'
                                        value={studentData.name}
                                        onChange={inputData}
                                        placeholder="Enter student name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder='Enter Student Email' required name='email' value={studentData.email} onChange={inputData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        required
                                        name='phone'
                                        maxLength="10"
                                        value={studentData.phone}
                                        onChange={inputData}
                                        placeholder="Enter 10-digit phone number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="male" value="Male" required onChange={inputData} />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="female" value="Female" required onChange={inputData} />
                                        <label htmlFor="female" className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="gender" id="other" value="Other" required onChange={inputData} />
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
                                        <option value="" disabled>Select a Course</option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="Front-End Development">Front-End Development</option>
                                        <option value="Back-End Development">Back-End Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Game Development">Game Development</option>
                                        <option value="UI & UX Design">UI & UX Design</option>
                                        <option value="Graphics Design">Graphics Design</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="C.C.C">C.C.C</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="feestatus" className="form-label">Fee Status</label>
                                    <select className="form-select" id="feestatus" required name='feestatus' value={studentData.feestatus} onChange={inputData}>
                                        <option value="" disabled>Select status</option>
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
    );
}

export default AddStudent;


