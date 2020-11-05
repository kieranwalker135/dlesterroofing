import React from 'react'

export default function CForm() {
    return (
        <div className="cForm">
            <form name="contact" action="/content" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 form-group mb-5"><input required type="text" name="Full name" placeholder="Full Name" class="form-control" /></div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 form-group mb-5"><input type="text" name="Phone number" placeholder="Phone Number" class="form-control" /></div>
                        <div class="col-12 col-sm-6 col-md-12 col-lg-4 form-group mb-5"><input required type="text" name="email" placeholder="Email Address" class="form-control" /></div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <textarea required id="" cols="30" rows="10" name="message" placeholder="Your enquiry" class="form-control mb-5"/>
                            <button type="submit" class="btn btn-second">Send</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
