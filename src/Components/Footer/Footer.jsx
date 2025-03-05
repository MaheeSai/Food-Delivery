import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus enim quos quod? Aliquam quam excepturi quia repudiandae in, temporibus pariatur?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Our Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1344554635</li>
                    <li>hello@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='copyright-content'>Copyright 2025 &copy; Tomato.com -All Rights Reserved </p>
    </div>
  )
}

export default Footer