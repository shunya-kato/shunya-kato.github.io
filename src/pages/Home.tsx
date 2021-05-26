import React from "react";
import "../assets/styles/home.scss";
import Footer from "../components/Footer";

const Home: React.FC = () => (
    <div className="home-body">
        <div className="area">
            <div className="titleHome">
                <p>Welcome to</p>
                <p>Shunya's Portfolio</p>
            </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <Footer />
    </div>
);

export default Home;