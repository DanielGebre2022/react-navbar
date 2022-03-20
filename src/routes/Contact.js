import React, { Component } from "react";
import '../App.css'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className='contact-flex'>
                    <div className='contact-image'>
                        <img className="contact-img" src={require("../Images/caterfish.jpg")}></img>
                    
                    </div>
                    <div className='contact-container'>
                        <ContactForm />
                    </div>
                    
                </div>
                <Footer />
            </div>
        )

    }
}
export default Contact