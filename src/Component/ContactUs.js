import React from 'react';
import '../CSS/ContactUs.css';


function ContactUsComponent(){
    return(
        <div className='ContactOwnerComponent'>
            <h1><b>Contact Us</b></h1>
                <div className='whatsappBtn'>
                    <button id='whatsappbtn' name="whatsapp">Whatsapp</button>
                </div>
                <div className='sendBox'>
                    <input type="text" id="senderEmail" placeholder="  Enter Your Email Here"/>
                    <input type="text" id="receiverEmail" placeholder="  Enter Receiver Email Here"/>
                    <input type="text" id="emailBody" placeholder="  Type Your message"/>
                </div>

        </div>

    )

}

export default ContactUsComponent;

