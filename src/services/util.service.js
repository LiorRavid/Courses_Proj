export const utilService = {
    makeId,
    getLoggedinUser
};

const STORAGE_KEY_LOGGEDIN_USER = process.env.REACT_APP_STORAGE_KEY_LOGGEDIN_USER;

function makeId(length = 6) {
    let txt = "";
    let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
