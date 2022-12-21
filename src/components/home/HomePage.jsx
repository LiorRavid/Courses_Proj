import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page-container">
                <h1>Welcome To Moodle</h1>
                <h2>You can start here</h2>
                <Link className="home-page-link" to="/login">Start</Link>
            </div>
        </div>
    );
}

export default HomePage;