import {loginProfessor,logoutProfessor} from '../services/professor.service';
import {loginStudent,logoutStudent} from '../services/student.service';

export {
    loginUser,
    logoutUser
}

async function loginUser(userInfo) {
        let user;
        switch(userInfo.role){
            case "professor": 
                user = await loginProfessor(userInfo);
                break;
            case "student": 
                user = await loginStudent(userInfo);
                break;
            default: user = null; 
        }
        return user;
}

function logoutUser(token,role) {
    let res;
    switch(role){
        case "professor": 
            res = logoutProfessor(token);
            break;
        case "student": 
            res = logoutStudent(token);
            break;
        default: res = null; 
    }
    return res;
}

