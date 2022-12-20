import {makeId} from "./util.service";
import {loadFromStorage,saveToStorage} from "./storage.service";

const STORAGE_KEY = 'Students_DB';

const gStudents = [
    {
        id:makeId(),
        firstName: "Eli",
        lastName: "Shabtai",
        birthDay:"10/01/2000",
        email:"e@e.com",
        adress:"Toval 30 Ramat-Gan",
        phoneNumber:"050-5380213",
        courses:[{}],
    }
]

_createStudents();

function _createStudents() {
    let students = loadFromStorage(STORAGE_KEY);
    if (!students || !students.length) {
        students = gStudents;
    }
    saveToStorage(students);
}
