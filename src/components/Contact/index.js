import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// importing email.js
import{ init } from 'emailjs-com';
init("user_5PifaWCGrPQuL7ghKo7R5");

// import './ContactUs.css';

export default function ContactUs() {

    const [emailResponse, setEmailResponse] = useState({ 
        ok: true,
        visible: false,
        message: ''
    });
    // const [emailSuccess, setEmailSuccess] = useState();


  function sendEmail(e) {
    e.preventDefault();

    //type="email"

    // user_5PifaWCGrPQuL7ghKo7R5

    emailjs.sendForm('service_u2qbro4', 'template_14mdvws', e.target, 'user_5PifaWCGrPQuL7ghKo7R5')
      .then((result) => {
          setEmailResponse({
              ok: true,
              visible: true,
              message: result.text
        })
      }, (e) => {
        setEmailResponse({
            ok: false,
            visible: true,
            message: e.text
      })
      // calling a function whether its successful or not
      }).finally(() => {
        setTimeout(() => {
            setEmailResponse({
                ...emailResponse,visible:false

            })
        },
        3000)
      });
  }

  return (
    <section className="contact-section">
        <div className="contact-card card" style={{width: '35rem'}}>
            <div className="card-body">
                <h5 className="card-title">Contact Me</h5>
                <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <div>
                    <label>Name</label>
                </div>
                <input type="text" name="user_name" />
                <div>
                    <label>Your Email</label>
                </div>
                <input name="user_email" />
                <div>
                    <label>Message</label>
                </div>
                <div>
                    <textarea name="message" />
                </div>
                <input className="submit-btn" type="submit" value="Send" />
                <div>{emailResponse.visible ? emailResponse.message : ''}</div>
            </form>
            </div>
        </div>
    </section>
  );
}