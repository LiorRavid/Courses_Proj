
import Axios from 'axios';
import { saveUserOnCookie,deleteUserFromCookie,getUserFromCookie } from '../cookies/cookies';

const URL = process.env.REACT_APP_BASE_URL;


const axios = Axios.create({
    withCredentials: true
});

export {
    loginStudent,
    logoutStudent,
    getLoggedinStudent,
    getStudentById,
    createStudent,
    editStudent,
    deleteStudent
}


async function editStudent(student,token) {
    try{
        const headers = {headers: {Authorization:"Bearer " + token}};
        student = await axios.patch(`${URL}/student/edit`,student ,headers);
        return student.data;
    }catch(error){
        throw error;
    }
}

async function createStudent(studentInfo,token) {
    try{
        const headers = {headers: {Authorization:"Bearer " + token}};
        const student = await axios.post(`${URL}/professor/new-student`, studentInfo, headers);
        return student.data;
    }catch(error){
        throw error;
    }
}

async function loginStudent(studentInfo) {
    try{
        const student = await axios.post(`${URL}/student/login`, studentInfo);
        if (student.data) return _saveStudent(student.data);
    }catch(error){
        throw error;
    }
}

async function logoutStudent(token) {
    try{
        const headers = {headers: {Authorization:"Bearer " + token}};
        deleteUserFromCookie();
        const res = await axios.post(`${URL}/student/logout`, {}, headers);
        return res.data;
    }catch(error){
        throw error;
    }
}

async function getStudentById(studentId,professorToken){
    try{
        const headers = {headers: {Authorization:"Bearer " + professorToken}};
        const student = await axios.get(`${URL}/professor/student/${studentId}`,{},headers);
        return student.data;
    }catch(error){
        throw error;
    }
}

async function deleteStudent(studentEmail,professorToken){
    try{
        const headers = {headers: {Authorization:"Bearer " + professorToken}};
        const res = await axios.delete(`${URL}/professor/student/${studentEmail}`, {}, headers);
        return res.data;
    }catch(error){
        throw error;
    }
}

function _saveStudent(user) {
    saveUserOnCookie(user);
    return user;
}

function getLoggedinStudent() {
    return getUserFromCookie();
}