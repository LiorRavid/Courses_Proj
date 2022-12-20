import React from "react";
import {FaUserEdit, FaUserGraduate} from "react-icons/fa";
import {SiCoursera} from "react-icons/si";
import { useNavigate } from "react-router-dom";

const ProfessorPage = ()=>{ 

    const navigate = useNavigate();

    const onClickEditUser = ()=>{
        navigate("/professor/edit");
    }

    const onClickCourses = ()=>{
        navigate("/professor/courses");
    }

    const onClickStudents = ()=>{
        navigate("/professor/students");
    }

    return (
        <React.Fragment>
            <div className="professor-dashboard-container">
                <div className="edit-user-container" onClick={onClickEditUser}>
                    <FaUserEdit className="edit-user-img"/>
                    <p>Edit User</p>
                </div>
                <div className="courses-container"  onClick={onClickCourses}>
                    <SiCoursera className="courses-img"/>
                    <p>Courses</p>
                </div>
                <div className="students-container" onClick={onClickStudents}>
                    <FaUserGraduate className="students-img"/>
                    <p>Students</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProfessorPage;