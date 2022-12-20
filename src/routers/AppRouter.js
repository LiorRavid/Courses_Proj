import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import LoginPage from '../components/login/LoginPage';
import Header from '../components/main/Header';
import ProfessorPage from '../components/professor/PofessorPage';
import StudentPage from '../components/student/studentPage';

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/professor" element={<ProfessorPage/>}/>
                <Route path='/student' element={<StudentPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
);

export default AppRouter;