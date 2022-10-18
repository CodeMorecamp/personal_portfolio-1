import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image5.jpg'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.jpg'
import IMG4 from '../../assets/image1.jpg'
import IMG5 from '../../assets/image4.jpg'
import IMG6 from '../../assets/image8.jpg'


const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Responsive Multipage Full Stack Blog',
    github: 'github.com',
    demo: 'dribbble.com'
  },
  {
    id: 2,
    image:IMG2,
    title: 'React Responsive Portfolio',
    github: 'github.com',
    demo: 'dribbble.com'
  },
  {
    id: 3,
    image:IMG3,
    title: 'Thinker Blog-App',
    github: 'github.com',
    demo: 'dribbble.com'
  },
  {
    id: 4,
    image:IMG4,
    title: 'Travel Site',
    github: 'github.com',
    demo: 'dribbble.com'
  },
  {
    id: 5,
    image:IMG5,
    title: 'Responsive Admin Panel Design',
    github: 'github.com',
    demo: 'dribbble.com'
  },
  {
    id: 6,
    image:IMG6,
    title: 'Photograph Portfolio Design',
    github: 'github.com',
    demo: 'dribbble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio