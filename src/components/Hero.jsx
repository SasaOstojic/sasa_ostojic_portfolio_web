import {content} from '../Content'

const Hero = () => {
  const {hero} = content;
  return <section id='home'>
    <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
      <div data-aos = 'slide-left' data-aos-delay='1200' className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10'>
        <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#eaf2fa] mobile_position'>
          {hero.firstName}{' '}
          <span className='text-dark_primary'>{hero.LastName}</span>
        </h1>
      </div>
      <div className='pb-16 px-6 pt-6'>
        <h2>{hero.title}</h2>
        <br />
        <div className='flex justify-end'>
          <a href='#form'  className='btn cursor-pointer text-black hover:bg-dark_primary hover:text-white'>{hero.btnText}</a>
        </div>
        <div className='flex flex-col gap-10 mt-10'>
          {hero.hero_content.map((content, i) => (
            <div key={i} className={`flex items-center w-80 gap-5 ${ i ===1 &&'flex-row-reverse text-right'}`}>
              <h3>{content.count}</h3>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hero_img">
        <img src={hero.image} alt="..." className='h-full object-cover' />
      </div>
    </div>
  </section>;
};

export default Hero;
