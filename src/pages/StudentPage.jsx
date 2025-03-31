import React, { useEffect } from "react";
import "./StudentPage.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function StudentPage() {

  let nav = useNavigate()
  let logedinStudentData = JSON.parse(localStorage.getItem('loginStudentData')) || []

  let allStudentData =JSON.parse(localStorage.getItem('studentData')) || []

  // useEffect(() => {
  //   let login = JSON.parse(localStorage.getItem('studentLogin')) || false;
  //   if (!login) {
  //     nav('/');
  //   }
  // }, [])

   let PrintStudentData= allStudentData.find((val)=>{
    return(
      val.name === logedinStudentData.name && val.email ===logedinStudentData.email
    )
   })

  //  console.log(PrintStudentData);
   

  function LogOut() {


    localStorage.removeItem('loginStudentData')

    Swal.fire({
      title: "Student Logout Successfully !",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 2000
    });
    setTimeout(() => {
      nav('/')
    }, 2000)
  }


  return (
    <>
      <div className="container py-5">
        <h3 className="text-center text-primary mb-4 fw-bold">
          Student Profile Page
          <button className="btn btn-danger ms-3 fw-bold" onClick={LogOut}>Logout</button>
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="profile-card">
              {PrintStudentData.gender == "Male" ? (
                <img
                  src="./male-student.svg"
                  className=" mb-3 hello"
                  alt="Profile Picture"
                  height={"115px"}
                  width={"115px"}
                />
              ) : (
                <img
                  src="./female-student.svg"
                  className=" mb-3 hello"
                  alt="Profile Picture"
                  height={"115px"}
                  width={"115px"}
                />
              )}

              <h5>{PrintStudentData.name}</h5>
              <p>
                <strong>Student ID:</strong> {PrintStudentData.id}
              </p>
              <p>
                <strong>Course:</strong> {PrintStudentData.course}
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-4">
            <div className="info-box mb-3">
              <h5>
                <strong> <i className="bi bi-info-circle-fill me-2 fs-5"></i>General Information</strong>
              </h5>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>: {PrintStudentData.email}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>: {PrintStudentData.phone}</td>
                  </tr>
                  <tr>
                    <td>Date Of Birth</td>
                    <td>: {PrintStudentData.dataofbirth}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>: {PrintStudentData.gender}</td>
                  </tr>
                  <tr>
                    <td>Fee Status</td>
                    <td>: {PrintStudentData.feestatus}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default StudentPage;
