import Axios from 'axios';
import { saveUserOnCookie,deleteUserFromCookie,getUserFromCookie } from '../cookies/cookies';

const URL = process.env.REACT_APP_BASE_URL;

const axios = Axios.create({
    withCredentials: true
});

export {
    loginProfessor,
    logoutProfessor,
    getLoggedinProfessor,
    createProfessor,
    editProfessor,
}

async function editProfessor(professor,token) {
    try{
        const headers = {headers: {Authorization:"Bearer " + token}};
        professor = await axios.patch(`${URL}/professor/edit`,professor ,headers);
        _saveProfessor(professor.data);
        return professor.data;
    }catch(error){
        throw error;
    }
}

async function createProfessor(professorInfo,token) {
    try{
        const headers = {headers: {Authorization:"Bearer " + token}};
        const professor = await axios.post(`${URL}/professor/new-professor`, professorInfo, headers);
        return professor.data;
    }catch(error){
        throw error;
    }
}

async function loginProfessor(professorInfo) {
    // try{
        const professor = await axios.post(`${URL}/professor/login`, professorInfo);
        if (professor.data) {return _saveProfessor(professor.data)};
    // }catch(error){
    //     throw error;
    // }
}

async function logoutProfessor(token) {
    try{
        const headers = {headers:{Authorization:"Bearer " + token}};
        deleteUserFromCookie();
        const res = await axios.post(`${URL}/professor/logout`, {}, headers);
        return res.data;
    }catch(error){
        throw error;
    }
}

function _saveProfessor(user) {
    saveUserOnCookie(user);
    return user;
}

function getLoggedinProfessor() {
    return getUserFromCookie();
}
