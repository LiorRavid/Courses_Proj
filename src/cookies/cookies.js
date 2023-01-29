import Cookies from 'js-cookie';

const COOKIE_KEY_LOGGEDIN_USER = process.env.REACT_APP_COOKIE_KEY_LOGGEDIN_USER;

export const saveUserOnCookie = (userData) => {
    const jsonUserData = JSON.stringify(userData);
    Cookies.set(COOKIE_KEY_LOGGEDIN_USER, jsonUserData, { expires: 6 / 24, sameSite: "strict", secure: true });
};

export const deleteUserFromCookie = () => {
    Cookies.remove(COOKIE_KEY_LOGGEDIN_USER, { secure: true, sameSite: "strict" });
};

export const getUserFromCookie = () => {
    const jsonUserData = Cookies.get(COOKIE_KEY_LOGGEDIN_USER);
    if (jsonUserData === undefined) return null;
    return JSON.parse(jsonUserData);
};