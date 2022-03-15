import React, { Component } from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div className="FooterWrapper">
        
            <div className="footer-container">
                <div className="social">
                    <h5 className="socialText">Social</h5>  
                    <ul className="socialList" style={{left: "15em"}} >
                        <li>
                            <a href="#">
                            <i className="fa fa-facebook icon"></i>    </a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter icon"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-linkedin icon"></i></a></li>
                       
                        <li>
                            <a href="#"><i className="fa fa-instagram icon"></i></a></li>
                    </ul>
                 
                </div>
                <div className="contact">
                    <h1 className="contact-title">Get Started</h1>
                    <p className="contact-text">We'd Love to hear what you have planned</p>
                    <button type="button" class="btn btn-light experience contact-button">Contact Us</button>
                    <p className="phoneNumber">or call <em>202-202-2022</em></p>
                </div>
            </div>
            <div className="bottom-footer">
                <div>
                    <section className="copyright">&copy; S1 Kitchen | site by danielgcodes.com </section>
                </div> 
              
            </div>
        </div>
    )
}