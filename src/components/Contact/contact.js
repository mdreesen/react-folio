import React from 'react';
import emailjs from 'emailjs-com';

// importing email.js
import{ init } from 'emailjs-com';
init("user_5PifaWCGrPQuL7ghKo7R5");

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_u2qbro4', 'template_14mdvws', e.target, 'user_5PifaWCGrPQuL7ghKo7R5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
                    <label>Email</label>
                </div>
                <input type="email" name="user_email" />
                <div>
                    <label>Message</label>
                </div>
                <div>
                    <textarea name="message" />
                </div>
                <input className="submit-btn" type="submit" value="Send" />
            </form>
            </div>
        </div>
    </section>
  );
}