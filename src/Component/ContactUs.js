import React from 'react';
import '../CSS/ContactUs.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import axios from "axios";
import { useState } from "react";


function ContactUsComponent(){

    const [senderEmail, setSenderEmail] = useState("");
    //const [receiverEmail, setReceiverEmail] = useState("");
    const [emailBody, setEmailBody] = useState("");

    async function submit(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/contactUs", {
            senderEmail: senderEmail,
            emailBody: emailBody,
          }).then((res) =>
          {
            console.log(res.data);
            if(res.data === "Incorrect Sender Email")
            {
              alert("Incorrect Sender Email");
            }
            else if(res.data === "Email Successfully Sent!...")
            {
              alert("Email Successfully Sent!...");
              //nav('/Home.js');
            }
            else{
              alert("Empty Message");
            }
          }, 
          );
    
        } catch (err) {
          alert(err);
        }
    
      }

    return(
        <div>
            <NavigationBar/>
            <div className='ContactOwnerComponent'>
                <h1><b>Contact Us</b></h1>
                    
                    <div className='sendBox'>
                        <input type="text" id="senderEmail" placeholder="  Enter Your Email Here"
                        value={senderEmail} onChange={(event) => 
                            setSenderEmail(event.target.value)}/>

                        <textarea id='receiverEmail'readonly placeholder="  BoardingHub@gmail.com"></textarea>

                        <input type="text" id="emailBody" placeholder="  Type Your message" 
                        value={emailBody} onChange={(event) => 
                            setEmailBody(event.target.value)}/>
                            
                        <button className="submitBtn" type="Submit" onClick={submit}>
                            <b>Submit</b>
                        </button>
                    </div>
            </div>
            <Footer/>
        </div>
    
    )

}

export default ContactUsComponent;

