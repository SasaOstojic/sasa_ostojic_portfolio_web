import {content} from '../Content'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';

//Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Projects = () => {
  const {Projects} = content;

  return (
  <section className='bg-bg_light_primary' id='projects'>
      <div className='md:container px-5 pt-14 min-h-screen flex flex-col justify-between'>
        <div>
            <h2 className='title'>{Projects.title}</h2>
            <h4 className='subtitle'>{Projects.subtitle}</h4>
            <br />
        </div>
        <div className='flex items-center lg:flex-row flex-col-reverse gap-5'>
          <img src={Projects.image} alt="..." className='max-w-[45vw] min-w-[22rem]'/>
            <Swiper
              pagination={{clickable: true}}
              modules={[Autoplay, Pagination]}
              data-aos='fade-left'
              spaceBetween={20}
              autoplay ={{delay: 2000}}
              className='rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start'
              >
                {Projects.project_content.map((content, i) => (
                   <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#faf9fd] h-fit">
                      <img src={content.image} style={{width: '200px'}} alt="..."/>
                      <div className='flex flex-col gap-1 mt-2'>
                        <h5 className='font-bold font-Ppoppins'>{content.title}</h5>
                        <a href={content.link} className='font bold text-black self-end'> See this website &rarr;</a>
                      </div>
                   </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
  </section>
  );
};

export default Projects;
