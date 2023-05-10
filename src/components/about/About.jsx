import React from 'react';
import './about.css';
import ME from '../../assets/IMG-7258.jpg';
import {FaAward} from 'react-icons/fa';
// import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Me in a green shirt smiling infront of some planters on a light green background.'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Working experience</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>
            figAs a seasoned software developer, I am deeply committed to creative problem solving and possess a wealth of knowledge in modern web design, prioritizing the development of reliable and efficient code. My extensive experience has honed my abilities to collaborate effectively within a team environment, making me a skilled professional capable of delivering results that exceed expectations.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About