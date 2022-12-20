import {makeId} from "./util.service";
import {loadFromStorage,saveToStorage} from "./storage.service";

const STORAGE_KEY = 'ProffesorsDB';

const gProfessors = [
    {
        id:makeId(),
        firstName: "Moshe",
        lastName: "Cohen",
        birthDay:"09/05/1980",
        email:"m@m.com",
        adress:"Jabotinsky 37 Haifa",
        phoneNumber:"050-9871234",
        courses:[{}],
    }
]

_createProfessors();

function _createProfessors() {
    let professors = loadFromStorage(STORAGE_KEY);
    if (!professors || !professors.length) {
        professors = gProfessors;
    }
    saveToStorage(professors);
}