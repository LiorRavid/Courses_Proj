import {utilService} from "./util.service.js";
import {storageService} from "./storage.service.js";

export const STORAGE_KEY = 'UsersDB';

const gUsers = [
    {
        id:utilService.makeId(),
        firstName: "Moshe",
        lastName: "Cohen",
        birthDay:"09/05/1980",
        email:"m@m.com",
        adress:"Jabotinsky 37 Haifa",
        phoneNumber:"050-9871234",
        title:"professor",
        courses:[{}],
    },
    {
        id:utilService.makeId(),
        firstName: "Eli",
        lastName: "Shabtai",
        birthDay:"10/01/2000",
        email:"e@e.com",
        adress:"Toval 30 Ramat-Gan",
        phoneNumber:"050-5380213",
        title:"student",
        courses:[{}],
    }
]

_createUsers();

function _createUsers() {
    let users = storageService.loadFromStorage(STORAGE_KEY);
    if (!users || !users.length) {
        users = gUsers;
    }
    console.log('users',users);
    storageService.saveToStorage(STORAGE_KEY,users);
}