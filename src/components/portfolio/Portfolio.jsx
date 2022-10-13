import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.png';
import img3 from '../../assets/portfolio3.png';
import img4 from '../../assets/portfolio4.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    img: img1,
    title: 'Dog Bark',
    github: 'https://github.com/lcmpbll/Capstone',
    demo: 'main.d1esgnd6ng74kd.amplifyapp.com/'
  },
  {
    id: 2,
    img: img2,
    title: 'EpiGames',
    github: 'https://github.com/lcmpbll/EpiGames',
    demo: null
  },
  {
    id: 5,
    img: img5,
    title: 'StarTrek Dash',
    github: 'https://github.com/lcmpbll/StarTrekDash',
    demo: null
  },
  {
    id: 3,
    img: img3,
    title: 'Oregon Parks',
    github: 'https://github.com/lcmpbll/oregonparksReact',
    demo: null
  },
  {
    id: 4,
    img: img4,
    title: 'Arkham Horror',
    github: 'https://github.com/lcmpbll/Arkham-Horror',
    demo: 'lcmpbll.github.io/Arkham-Horror/'
  },
  {
    id: 6,
    img: img6,
    title: 'Hair Salon',
    github: 'https://github.com/lcmpbll/Hair-Salon.Solution/tree/main/HairSalon',
    demo: null
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, img, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={img} alt={title} height='300px'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} style={{display: demo === null ? 'none' : null }} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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