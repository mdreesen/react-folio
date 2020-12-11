import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // a React Hook that will manage the form data
    // formState will have three key-value paris to represent the three user inputs
    const [formState, setFormState] = useState({ name: '', email: '', message: ''})
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    // function for handling the onChange
    // used the spread operator so we can retain the other key-value paris in this object
    function handleChange(e) {

        // If there is an error in this, the email will not go through
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // if no errorMessage, then the email should go through
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage);
    }
    console.log(formState);

    // This function is for submitting the form
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
        <div className="contact-card card" style={{width: '35rem'}}>
            <div className="card-body">
                <h5 className="card-title">Contact Me</h5>
                <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange}></textarea>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        </section>
    );
}

export default Contact;