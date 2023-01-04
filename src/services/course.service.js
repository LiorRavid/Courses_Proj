import Axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

const axios = Axios.create({
    withCredentials: true
});

export const studentService = {
    getCourse,
    getAttendances,
    addCourse,
    addStudentToCourse,
    removeStudentFromCourse,
    getStudentCourses,
    getProfessorCourses,
    getStudentCourse,
    editCourseAttendance,
    deleteCourse
}

// To help debugging from console
window.studentService = studentService

async function getCourse(professorToken,courseName){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const course = await axios.get(`${URL}/course/${courseName}`, {} , headers);
        return course.data;
    }catch(error){
        throw error;
    }
}

async function getAttendances(professorToken,courseName,date){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const attendances = await axios.get(`${URL}/course/${courseName}/${date}`, {} , headers);
        return attendances.data;
    }catch(error){
        throw error;
    }
}

async function addCourse(professorToken,courseData){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const course = await axios.post(`${URL}/course/new-course`, courseData , headers);
        return course.data;
    }catch(error){
        throw error;
    }
}

async function addStudentToCourse(studntEmail,professorToken,courseName){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const enroll = await axios.post(`${URL}/proffesor/student/course/${studntEmail}`, {courseName} , headers);
        return enroll.data;
    }catch(error){
        throw error;
    }
}

async function removeStudentFromCourse(studntEmail,professorToken,courseName){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const res = await axios.delete(`${URL}/proffesor/student/course/${studntEmail}`, {courseName} , headers);
        return res.data;
    }catch(error){
        throw error;
    }
}

async function getStudentCourses(studentToken){
    try{
        const headers = {Authorization:"Bearer" + studentToken};
        const courses = await axios.get(`${URL}/student/course`, {} , headers);
        return courses.data;
    }catch(error){
        throw error;
    }
}

async function getProfessorCourses(professorToken){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const courses = await axios.get(`${URL}/course/professor`, {} , headers);
        return courses.data;
    }catch(error){
        throw error;
    }
}

async function getStudentCourse(studentToken,courseName){
    try{
        const headers = {Authorization:"Bearer" + studentToken};
        const course = await axios.get(`${URL}/student/course/${courseName}`, {} , headers);
        return course.data;
    }catch(error){
        throw error;
    }
}

async function editCourseAttendance(studentToken,courseName,attendaceData){
    try{
        const headers = {Authorization:"Bearer" + studentToken};
        const res = await axios.patch(`${URL}/student/course/${courseName}`, attendaceData , headers);
        return res.data;
    }catch(error){
        throw error;
    }
}

async function deleteCourse(professorToken,courseName){
    try{
        const headers = {Authorization:"Bearer" + professorToken};
        const res = await axios.delete(`${URL}/course/${courseName}`, {} , headers);
        return res.data;
    }catch(error){
        throw error;
    }
}




