import React from 'react'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-about'>
                    <h2>About us</h2>
                    <p>is an eveningwear brand with an emphasis on beautiful silhouettes,
                    dimensional textures and sophisticated nostalgia. The collection
                    cultivates a look of elegant fragility with a sophisticated edge at a
                    more reasonable price than other high-end brands.</p>
                </div>
                <div className='footer-contact'>
                    <h2>Contact us</h2>
                    <input type="text" placeholder='Enter your mail*'/>
                    <br/>
                    <input type="text" placeholder='Your mobile'/>
                </div>
                <div className='footer-logo'>
                    <img src="/img/logo-white.png" alt="logo"/>
                </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
                <div className='footer-menu'>
                    <ul>
                        <li>HOME</li>
                        <li>COLLECTION</li>
                        <li>THE BRAND</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className='metrica-footer'>
                    <p>Made with Métrica 2.0</p>
                </div>
            </div>
        </div>
    )
}
