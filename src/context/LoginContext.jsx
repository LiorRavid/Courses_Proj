import React, { createContext, useReducer } from 'react';
import { getUserFromCookie } from '../cookies/cookies';
import loginReducer, { userDataInitialState } from '../reducers/loginReducer';


export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const initialData = cookieUserData || userDataInitialState;
    const [userData, dispatchUserData] = useReducer(loginReducer, initialData);

    return (
        <LoginContext.Provider value={ { userData, dispatchUserData } }>
            {props.children }
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;