import React from 'react'
import './services.css'
import { BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Option</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provides full stack solution
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scalable at any level
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>For all type of clients
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Full Responsive
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Full SEO optimization
              </p>
            </li>
          </ul>
        </article>
        {/* Emd of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Only</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Websites
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern technology for best perfomance
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Beautiful UI
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Landing pages for small to large business
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>SEO friendly
              </p>
            </li>
          </ul>
        </article>
        {/* End of webdev */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Option</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manageable backend to manage all kind of logic
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solution based implementation
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Admin Panel
              </p>
            </li><li>
              <BiCheck className='service__list-icon'/>
              <p>Automation System
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services