import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/thinkerblog.png'
import IMG2 from '../../assets/newsapp.png'
import IMG3 from '../../assets/simple_portfolio.png'
import IMG4 from '../../assets/Blog-cute.png'
import IMG5 from '../../assets/983286.jpg'
import IMG6 from '../../assets/image8.jpg'


const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Responsive Multipage Full Stack Blog',
    github: 'https://github.com/CodeMorecamp/Thinker-Full-Job',
    demo: 'https://thinkblog.netlify.app/'
  },
  {
    id: 2,
    image:IMG2,
    title: 'News App -work in progress',
    github: 'https://github.com/CodeMorecamp/Blog-1--ThinkerPen',
    demo: 'https://thinkerpen.netlify.app/index.html'
  },
  {
    id: 3,
    image:IMG3,
    title: 'A simple Portfolio -in progress',
    github: 'https://github.com/CodeMorecamp/Project_Folio/blob/master/index.html',
    demo: 'https://velvety-crisp-e2de4b.netlify.app/'
  },
  {
    id: 4,
    image:IMG4,
    title: 'Cute Blog-App',
    github: 'https://github.com/CodeMorecamp/devblog-personal-blog-website-master',
    demo: 'https://thinkerpen2.netlify.app/#'
  },
  {
    id: 5,
    image:IMG5,
    title: 'Responsive Admin Panel Design -in progress',
    github: 'github.com',
    demo: 'dribbble,com'
  },
  {
    id: 6,
    image:IMG6,
    title: 'Photograph Portfolio Design -In progress',
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