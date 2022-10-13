import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/avatar1.jpeg';
// import swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'Nago',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti vero, dolorem cum distinctio autem. Rerum consequatur nisi officiis adipisci possimus reiciendis natus numquam quia magni laudantium, assumenda quidem ipsum.'
  },
  {
    avatar: avatar1,
    name: 'LowKey',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti vero, dolorem cum distinctio autem. Rerum consequatur nisi officiis adipisci possimus reiciendis natus numquam quia magni laudantium, assumenda quidem ipsum.'
  },
  {
    avatar: avatar1,
    name: 'Suki',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti vero, dolorem cum distinctio autem. Rerum consequatur nisi officiis adipisci possimus reiciendis natus numquam quia magni laudantium, assumenda quidem ipsum.'
  },
  {
    avatar: avatar1,
    name: 'Barley',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti vero, dolorem cum distinctio autem. Rerum consequatur nisi officiis adipisci possimus reiciendis natus numquam quia magni laudantium, assumenda quidem ipsum.'
  },
  {
    avatar: avatar1,
    name: 'Rye',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti vero, dolorem cum distinctio autem. Rerum consequatur nisi officiis adipisci possimus reiciendis natus numquam quia magni laudantium, assumenda quidem ipsum.'
  },
  
]
  

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spacebetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
       {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  );
}

export default Testimonials;