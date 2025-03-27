import React, { useState } from 'react'
import './AdminPage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../Feature/StudentDataSlice'
import Swal from 'sweetalert2'


function AdminPage() {
    let dispatch = useDispatch()

    const [searchData, setSearchData] = useState("")






    let nav = useNavigate()

    const { studentData } = useSelector((state) => {
        return (

            state.studentData
        )
    })

    const studentDataDelete = (id) => {


        dispatch(deleteStudent(id))

        Swal.fire({
            title: "Student Delete Successfully !",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 2000
        });
    }

    const fillterData = studentData.filter((val) => {
        return (
            val.name.toLowerCase().includes(searchData.toLowerCase())
        )
    })

    // console.log(fillterData);









    return (
        <>
            <h1 className='text-center mt-2 text-danger fw-bold'>Admin Panal</h1>

            <div className="container box2 " >

                <div className="student_box mt-3 bg-primary  flex_proparty">
                    <h2 className='text-light mt-2'>Total Student</h2>
                    <div className="icons d-flex justify-content-center align-items-center fs-1 text-light">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="student_info text-light fs-4 ">{studentData.length}</div>
                </div>
                <div className="student_box mt-3 bg-danger  flex_proparty">
                    <h2 className='text-light mt-2'>Student Fee Paid</h2>
                    <div className="icons d-flex justify-content-center align-items-center fs-1 text-light">
                        <i className="bi bi-person-fill-check"></i>
                    </div>
                    <div className="student_info text-light fs-4 ">5</div>
                </div>
                <div className="student_box mt-3 bg-warning  flex_proparty">
                    <h2 className='text-light mt-2'>Student Fee Unpaid</h2>
                    <div className="icons d-flex justify-content-center align-items-center fs-1 text-light">
                        <i className="bi bi-person-fill-exclamation"></i>
                    </div>
                    <div className="student_info text-light fs-4 ">5</div>
                </div>
            </div>

            <div className="container  ">


                <div className="button_main mt-2 p-2" >

                    <button className="btn btn-primary fs-5" onClick={() => nav('/addstudent')}>
                        <i className="bi bi-person-plus fs-5 me-1"></i> Add Student
                    </button>

                </div>



                <div className="container  ">


                    <h2 className="mb-4 text-center fw-bold">Student Information</h2>
                    <div className="serchbar_main mt-2">

                        <div className="input-group p-2">
                            <input type="text" className="form-control fs-5" placeholder="Search For Student info" onChange={(e) => setSearchData(e.target.value)} />

                        </div>
                    </div>
                    <div className="table-responsive mt-4">
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Gender</th>
                                    <th>Date of Birth</th>
                                    <th>Course</th>
                                    <th>Fee Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    fillterData.length > 0 ? (
                                        fillterData.map((val, index) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{val.name}</td>
                                                    <td>{val.email}</td>
                                                    <td>{val.phone}</td>
                                                    <td>{val.gender}</td>
                                                    <td>{val.dataofbirth}</td>
                                                    <td>{val.course}</td>
                                                    <td> {val.feestatus}</td>
                                                    <td>
                                                        <button className="btn btn-primary btn-sm m-2" onClick={() => nav('/editstudent', { state: val })}><i className="bi bi-pencil "></i></button>
                                                        <button className="btn btn-danger btn-sm m-2" onClick={() => studentDataDelete(val.id)}><i className="bi bi-trash"></i></button>
                                                    </td>
                                                </tr>

                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <th colSpan="8" >No data found</th>
                                        </tr>
                                    )
                                }

                                {/* <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>john@example.com</td>
                                    <td>+1234567890</td>
                                    <td>Male</td>
                                    <td>1995-08-12</td>
                                    <td>Computer Science</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm m-2" onClick={() => nav('/editstudent')}><i className="bi bi-pencil "></i></button>
                                        <button className="btn btn-danger btn-sm m-2"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr> */}



                            </tbody>
                        </table>
                    </div>




                </div>














            </div>

        </>
    )
}

export default AdminPage
