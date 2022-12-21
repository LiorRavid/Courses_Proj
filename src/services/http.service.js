
import {storageService} from './storage.service';
import {STORAGE_KEY} from './user.service';

export const httpService = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    editUser
}

function getUsers(){
    let users = storageService.loadFromStorage(STORAGE_KEY);
    return users;
}

function getUserById(userID){
    let users = storageService.loadFromStorage(STORAGE_KEY);
    let user = users.filter((userID,index)=>{
        return users[index] === userID;
    });
    return user;
}

function addUser(user){
    let users = storageService.loadFromStorage(STORAGE_KEY);
    users.push(user);
    storageService.saveToStorage(STORAGE_KEY,users);
    return users;
}

function removeUser(userID){
    let users = storageService.loadFromStorage(STORAGE_KEY);
    users = users.filter((userID,index)=>{
        return users[index] !== userID;
    });
    storageService.saveToStorage(STORAGE_KEY,users);
    return users;
}

function editUser(user){
    const userID = user.id;
    let users = storageService.loadFromStorage(STORAGE_KEY);
    users[user.id] = user;
    storageService.saveToStorage(STORAGE_KEY,users);
    return users;
}
