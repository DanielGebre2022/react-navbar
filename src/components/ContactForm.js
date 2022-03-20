import React, { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, guest, company, phone, event, date } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      guest: guest.value,
      company: company.value,
      phone: phone.value,
      date: date.value,
      event: event.value
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <h1>
          LET'S <br/>BEGIN
        </h1>
        <p>Thanks for your interest, we look forward to working with you!</p>
      </div>
      <div className="input-div name-div">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="input-div email-div">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="input-div guest-div">
        <label htmlFor="guest">Est. Guest Count</label>
        <input type="text" id="email" required />
      </div>
      <div className="input-div company-input">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" required />
      </div>
      <div className="input-div phone-div">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" required />
      </div>
      <div className="input-div date-div">
        <label htmlFor="date">Date</label>
        <input type="text" id="date" required />
      </div>
      <div id="company-div">
        <label htmlFor="event-type">Event Type</label>
        <select name="input_4" >
          <option value="Corporate">Corporate</option>
          <option value="Social/Other">Social/Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="services" id="wrap-label">What Services Are <br></br>You Interested in?</label>
        <select >
          <option value="" selected="selected" class="gf_placeholder">- - -</option>
          <option value="Full Event Catering">Full Event Catering</option>
          <option value="Platters Drop Off or Pick Up (No service)">Platters Drop Off or Pick Up (No service)</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Comment/Message:</label>
        <textarea id="message" required/>
      </div>
    <div id="button-container">
      <Button id='send-button' type='submit' variant="contained" endIcon={<SendIcon />}>{status}</Button>
    </div> 
  </form>
  );
};

export default ContactForm;