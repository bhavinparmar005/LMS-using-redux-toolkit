import React from 'react'
import { useNavigate } from 'react-router-dom'


function AllStudentPrint() {
    let nav = useNavigate()
    let allstudent = JSON.parse(localStorage.getItem('studentData')) || []
    return (
        <>
            <div className="container d-flex justify-content-end mt-5">
                <button className="btn btn-primary p-2 fs-5 fw-bold" onClick={() => nav('/adminpage')}> Go to AdminPanal</button>
            </div>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    {
                        allstudent.map((val) => {
                            return (
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            {
                                                val.gender === "Male" ?
                                                    (<img src="./male-student.svg" alt="Profile Image" width={"100px"} height={'100px'} />) :
                                                    val.gender === "Female" ?
                                                        (<img src="./female-student.svg" alt="Profile Image" width={"100px"} height={'100px'} />) :
                                                        (<img src="/other.png" alt="Profile Image" width={"100px"} height={'100px'} />)
                                            }
                                            <h5 className="mt-3"> {val.name}</h5>
                                            <p className="fw-bold">Student ID: <span className="fw-normal">{val.id}</span></p>
                                            <p className="fw-bold">Course: <span className="fw-normal">{val.course}</span></p>
                                            <p className="fw-bold">Email: <span className="fw-normal">{val.email}</span></p>
                                            <p className="fw-bold">Phone Number: <span className="fw-normal">{val.phone}</span></p>
                                            <p className="fw-bold">Date Of Birth: <span className="fw-normal">{val.dataofbirth}</span></p>
                                            <p className="fw-bold">Gendar: <span className="fw-normal">{val.gender}</span></p>
                                            <p className="fw-bold">Fee Status: <span className="fw-normal">{val.feestatus}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllStudentPrint
