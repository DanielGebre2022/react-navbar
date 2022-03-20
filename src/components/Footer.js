import React, { Component } from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div className="FooterWrapper">
        <div className="footer-container">
            <div className="contact">
                <h1 className="contact-title">Get Started</h1>
                <p className="contact-text">We'd Love to hear what you have planned</p>
                <button type="button" class="btn btn-light experience contact-button">Contact Us</button>
                <p className="phoneNumber">or call <em>202-202-2022</em></p>
            </div>
            <div className="social">
                <h5 className="socialText">Social</h5>  
                <ul className="socialList ListStyleNone">
                    <li><a href="https://www.instagram.com/ajoywallace/" target="_blank" rel="noopener" aria-label="Visit our Instagram page"><img src="https://ajoywallace.com/wp-content/themes/ajw-custom/img/social/instagram_white.svg" alt="Instagram" width="15" /></a>
                    </li>
                    <li><a href="https://www.facebook.com/ajoywallace" target="_blank" rel="noopener" aria-label="Visit our Facebook page">
                            <img src="https://ajoywallace.com/wp-content/themes/ajw-custom/img/social/facebook_white.svg" alt="Facebook" width="15" /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/company/a-joy-wallace-catering-production-&amp;-design-team/" target="_blank" rel="noopener" aria-label="Visit our LinkedIn page">
                            <img src="https://ajoywallace.com/wp-content/themes/ajw-custom/img/social/linkedin_white.svg" alt="LinkedIn" width="15" /></a>
                    </li>
                    <li><a href="https://www.pinterest.com/ajoywallace/" target="_blank" rel="noopener" aria-label="Visit our Pinterest page">
                            <img src="https://ajoywallace.com/wp-content/themes/ajw-custom/img/social/pinterest_white.svg" alt="Pinterest" width="15" /></a>
                    </li>
                    <li><a href="https://twitter.com/ajoywallace" target="_blank" rel="noopener" aria-label="Visit our Twitter page">
                            <img src="https://ajoywallace.com/wp-content/themes/ajw-custom/img/social/twitter_white.svg" alt="Twitter" width="15" /></a>
                    </li>
                </ul>
             
            </div>
          
        </div>
        <div className="bottom-footer">
            <div>
                <section className="copyright">&copy; S1 Kitchen | site by <a href="http://www.danielgcodes.com">danielgcodes.com</a></section>
            </div> 
          
        </div>
    </div>
       
    )
}