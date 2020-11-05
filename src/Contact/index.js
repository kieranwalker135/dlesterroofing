import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'

import './styled.scss'

const ContactForm = () => {
    const [formData, setFormData] = useState({})


    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-your-app-name.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                alert('Contact form has been sent')
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    email: formData.phone,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
                alert(error.message)
            })
    }

    return (
        <>
            <div>
                <div class="container">
                    <form onSubmit={handleSubmit}>
                        <div class="row mb-5">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-4 form-group">
                                <label>Full Name</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name="name"

                                    onChange={updateInput}
                                    value={formData.name || ''}
                                />
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-4 form-group">
                                <label>Email Address</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    name="email"

                                    onChange={updateInput}
                                    value={formData.email || ''}
                                />
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 form-group">
                                <label>Phone Number</label>
                                <input
                                    class="form-control"
                                    type="phone"
                                    name="phone"

                                    onChange={updateInput}
                                    value={formData.phone || ''}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label>Your Message</label>
                                <textarea
                                    class="form-control mb-5"
                                    type="text"
                                    name="message"

                                    rows="5"
                                    onChange={updateInput}
                                    value={formData.message || ''}
                                ></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-second">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm