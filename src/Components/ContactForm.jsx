import React, { useState } from 'react'
import ContactDetails from './contactDetails';
import { db } from './Firebase'


const ContactForm = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ message, setMessage ] = useState("");

    const[loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name:name,
            email:email,
            phone:phone,
            message:message,
        })
        .then(() => {
            alert('Contact form has been sent')
            setLoader(false)
        })
        .catch(error => {
            alert(error.message)
            setLoader(false)
        })

        setName('')
        setEmail('')
        setPhone('')
        setEmail('')
    };

    return (
        <div className="green-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Get In Touch</h2>
                        <p class="lead">Get in touch, and I will get back to you as soon as possible.</p>
                        <ContactDetails />
                    </div>
                </div> 

            </div>
        </div>


    )
}

export default ContactForm
