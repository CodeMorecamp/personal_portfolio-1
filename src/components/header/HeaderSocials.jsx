import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/femi-olabiyi-858059b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/CodeMorecamp" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/FEMIEMMANUELOL1" target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials