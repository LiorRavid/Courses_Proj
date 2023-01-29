import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom';
import Loader from '../components/main/Loader';
import { LoginContext } from '../context/LoginContext';

const PrivateRoutes = ()=>{
    const {userData} = useContext(LoginContext);
    return (
        !!userData.user ? <Outlet /> : <Loader />);
};

export default PrivateRoutes;