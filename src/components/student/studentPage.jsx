import React from 'react';
import {FaUserEdit} from "react-icons/fa";
import {SiCoursera} from "react-icons/si";
import { useNavigate } from "react-router-dom";

const StudentPage= ()=>{ 

    const navigate = useNavigate();

    const onClickEditUser = ()=>{
        navigate("/student/edit");
    }

    const onClickCourses = ()=>{
        navigate("/student/courses");
    }

    return (
        <React.Fragment>
            <div className="user-dashboard-container">
                <div className="edit-user-container" onClick={onClickEditUser}>
                    <FaUserEdit className="edit-user-img"/>
                    <p>Edit User</p>
                </div>
                <div className="courses-container"  onClick={onClickCourses}>
                    <SiCoursera className="courses-img"/>
                    <p>Courses</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentPage;