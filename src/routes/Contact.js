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
                    
                        <h1>open space-------------------------------------------------------------------------</h1>
                        <h1>more space----------------------------------------------------------------</h1>
                        <h1>open space-------------------------------------------------------------------------</h1>
                        <h1>more space----------------------------------------------------------------</h1>
                        <h1>open space-------------------------------------------------------------------------</h1>
                        <h1>more space----------------------------------------------------------------</h1>
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