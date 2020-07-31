import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { UsHero } from './UsHero';
import { Description } from './Description';
import { Footer } from '../Footer';

export const Us = () => {
    const [lightNav, setLightNav] = useState(true)
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        document.getElementById("mobile-menu").style.display = "none"
        document.getElementById("mobile-menu").style.opacity = 0
        let currentScrollPos = window.pageYOffset
        if(currentScrollPos < 3){
            return document.getElementById("navbar").style.top = "0"
        } else if (prevScrollpos > currentScrollPos) {
            if(currentScrollPos >= 600){
                document.getElementById("navbar").style.backgroundColor = "white"
                document.getElementById("hamburger-id").style.color = "black"
                setLightNav(false)
            }
            else{
                document.getElementById("navbar").style.backgroundColor = "white"
                setLightNav(true)
                document.getElementById("hamburger-id").style.color = "black"
            }
            document.getElementById("navbar").style.top = "0"
        } else {
            document.getElementById("navbar").style.top = "-185px"
        }
        prevScrollpos = currentScrollPos
    }
    return (
        <div className='us-container'>
            <Navbar lightNav={lightNav} us/>
            <UsHero/>
            <Description/>
            <Footer/>
        </div>
    )
}
