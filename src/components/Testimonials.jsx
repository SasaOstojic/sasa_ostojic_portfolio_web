import { useState } from 'react';
import {content} from '../Content'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Testimonials = () => {
  const {Testimonials} = content;
  const [activeIndex, setActiveIndex] = useState(0)
  return (
  <div className='md:container px-5 pt-14'>
    <h2 className='title'>{Testimonials.title}</h2>
    <h4 className='subtitle'>{Testimonials.subtitle}</h4>
    <br />
    <Swiper
        pagination={{clickable: true}}
        direction={'vertical'}
        loop = {true}
        spaceBetween={40}
        slidesPerView={1.7}
        modules={[Pagination]}
        onSlideChange={(e) => setActiveIndex(e.realIndex)}
        className='md:h-96 h-[40rem] max-w-3xl'
    >
      {Testimonials.testimonials_content.map((content, i) => (
        <SwiperSlide key={i} >
          <div className={`duration-500  mx-8  p-8 h-full  flex items-center gap-6  selection-none md:flex-col flex-col ${activeIndex !== i && 'scale-75 blur-sm'} cursor-pointer`}>
            <img src={content.img} alt="..." className='h-24 rounded-full' />
            <div >
              <p className='sm:text-base text-sm'>{content.review}</p>
              <br />
              <h6>{content.name}</h6>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Testimonials;
