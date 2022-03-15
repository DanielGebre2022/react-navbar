/* Create a new file called server.js and first load the required dependencies: */

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();



/* Next we use express() to setup the server that’ll run on port 5000: */


app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));




/* We’ll use Gmail but if you would prefer to use another SMTP service I’d recommend reading the official Nodemailer documentation. You just need to add you username and password here to setup Nodemailer with Gmail: */

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "danielgebreselassie20@gmail.com",
      pass: "ncpyhfeyglsmuodp",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});



/* To complete the functionality we just need to setup the router and send the email: */



router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "danielgebreselassie20@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });