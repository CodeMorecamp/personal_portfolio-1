import React from 'react'
import './footer.css'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Femi Emmanuel</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/femi-olabiyi-858059b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/FEMIEMMANUELOL1" target='_blank'> <BsTwitter/></a>
        <a href="https://github.com/CodeMorecamp" target='_blank'> <BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Femi Emmanuel. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer