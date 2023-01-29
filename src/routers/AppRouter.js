import React, {Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContextProvider from "../context/LoginContext";
import Loader from "../components/main/Loader";
import HomePage from "../components/home/HomePage";
import LoginPage from "../components/login/LoginPage";
import Header from "../components/main/Header";
import ProfessorPage from "../components/professor/PofessorPage";
import StudentPage from "../components/student/studentPage";
import EditUserPage from "../components/edit-user/EditUserPage";
import PrivateRoutes from "./PrivateRoutes";


// SERVICEES IMPORT
import "../services/util.service.js";
import "../services/storage.service.js";
import "../services/student.service.js";
import "../services/course.service.js";
import MainLayout from "../components/main/MainLayout";

const AppRouter = () => (
    <BrowserRouter>
    <LoginContextProvider>
        <Header />
        <MainLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoutes/>}>
                    <Route path="/professor" element={<ProfessorPage />} />
                    <Route path="/professor/edit" element={<EditUserPage/>} />
                    <Route path="/student" element={<StudentPage />} />
                </Route>
            </Routes>
        </MainLayout>
        {/* <Footer/> */}
    </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
