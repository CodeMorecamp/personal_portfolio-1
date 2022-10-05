import React from 'react'
import './about.css'
import ME from '../../assets/image5.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {GrProjects} from 'react-icons/gr'
const About = () => {
  return (
    <section id='about'>
      <h5>Meet me</h5>
      <h2>Here and Now</h2>
      <div className='container about__container'>
        <div className="about__me-image">
        <img src={ME} alt="about" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              < FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              < HiOutlineUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50 + clients Worldwide</small>
            </article>
            <article className="about__card">
              < GrProjects className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi fuga illum sequi 
            cum nulla delectus excepturi expedita dolorum voluptatibus inventore enim, ullam magnam dicta.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About