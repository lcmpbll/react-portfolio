import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
           <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern Webdesign</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessible Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Simple Easy to Use Product</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactive Features</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>FrontEnd</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrated BackEnd</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create User Accounts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Hosting</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of Web Development */}
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>  
    </section>
  )
}

export default Services