import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/woman.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Femi Emmanuel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>

      </div>
    </header>
  )
}

export default Header