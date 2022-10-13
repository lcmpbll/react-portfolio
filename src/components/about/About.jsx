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
            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Coworkers</h5>
              <small>Working experience</small>
            </article> */}
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>After working in the grocery industry for the past couple years I decided put my love of problem solving and ability to think critically to work by learning to code with the help of Epicodus. I started Epicodus in late May of 2022 and with a focus on Javascript, C #, and React. In the future I hope to put the skills I'm learning now along with my previous experiences to jump start a new career in software development.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About