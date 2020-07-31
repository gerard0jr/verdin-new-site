import React from 'react'

export const ContactInputs = () => {
    return (
        <div className='contact-inputs-container'>
            <div className="contact-left">
                <h2 style={{textAlign:'left'}}>Contact Us</h2>
                <div className='landing-form-div'>
                    <div style={{justifyContent:'left'}} className="two-inputs">
                        <div className='landing-input'>
                            <p>First Name</p>
                            <input type="text"/>
                        </div>
                        <div className='landing-input'>
                            <p>Last Name</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div style={{justifyContent:'left'}} className="two-inputs">
                        <div className='landing-input'>
                            <p>Email</p>
                            <input type="text"/>
                        </div>
                        <div className='landing-input'>
                            <p>Phone</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='landing-text-area'>
                        <div className='landing-input'>
                            <p>Message</p>
                            <textarea name="message" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <p className='landing-form-submit'>SUBMIT</p>
                </div>
            </div>
            <div className="contact-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.156493052863!2d-73.99395474041332!3d40.754250432606554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ad79368585%3A0xd4019db894e17ccc!2sVerdin%20New%20York!5e0!3m2!1sen!2smx!4v1585026783197!5m2!1sen!2smx" title='map' width="320" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    )
}
