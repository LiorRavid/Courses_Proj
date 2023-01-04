import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContextProvider from "../context/LoginContext";
import HomePage from "../components/home/HomePage";
import LoginPage from "../components/login/LoginPage";
import Header from "../components/main/Header";
import ProfessorPage from "../components/professor/PofessorPage";
import StudentPage from "../components/student/studentPage";

// SERVICEES IMPORT
import "../services/util.service.js";
import "../services/storage.service.js";
import "../services/student.service.js";
import "../services/course.service.js";


const AppRouter = () => (
    <BrowserRouter>
    <LoginContextProvider>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/professor" element={<ProfessorPage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <Footer/> */}
    </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
