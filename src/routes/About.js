import React, { Component } from "react";
import '../App.css'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar/Navbar";
import AboutComp from '../components/AboutComp'
class About extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <AboutComp />
                
                <Footer />
            </div>
        )

    }
}
export default About