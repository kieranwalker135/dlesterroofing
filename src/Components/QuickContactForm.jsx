import React from 'react';
import ContactDetails from './contactDetails';
import contactDetails from './contactDetails'

function QuickContactForm() {

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        margin: '40px'
    }

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
                <div class="row">
                    <form style={formStyles} name="contact" action="/content" method="post">
                         <div class="col-12 col-sm-12 col-md-4">
                            <input type="hidden" name="form-name" value="contact"></input>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <input required type="text" name="name" placeholder="Full Name"></input>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <input required type="text" name="email" placeholder="Your email"></input>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <input required type="phone" name="phone" placeholder="your phone number"></input>
                        </div>
                        <div class="col-12">
                            <textarea required name="enquiry" placeholder="your message" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn btn-main">Send</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default QuickContactForm
