import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    let nav =useNavigate()
    return (
        <>
            <div className="main">

                <div className="student_and_admin_main">
                    <div className="sudent_icon"  onClick={()=>nav('/adminlogin')}>
                        <div className="student_img_main">
                        <i className="bi bi-person-gear"></i>
                         </div>
                        <h3 className='heading'>Admin</h3>
                    </div>
                    <div className="sudent_icon" onClick={()=>nav("/studentlogin")} >
                        <div className="student_img_main">
                        <i className="bi bi-person"></i>
                         </div>
                        <h3 className='heading'>Student</h3>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home
