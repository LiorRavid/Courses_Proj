import React from 'react';
import { BrowserRouter,Routes } from 'react-router-dom';
import Header from '../components/main/Header';

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
            <Routes>
                {/* <Route path="/" element = {HomePage}></Route> */}
            </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
);

export default AppRouter;