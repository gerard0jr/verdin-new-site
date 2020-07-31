import React from 'react'

export const ContactForm = () => {
    return (
        <div className='landing-form-container'>
            <h2>Contact Us</h2>
            <div className='landing-form-div'>
                <div className="two-inputs">
                    <div className='landing-input'>
                        <p>First Name</p>
                        <input type="text"/>
                    </div>
                    <div className='landing-input'>
                        <p>Last Name</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className="two-inputs">
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
    )
}
