import {content} from '../Content'

const Hireme = () => {
  const {Hireme} = content;
  return (
    <section className='bg-bg_light_primary'>
        <div className='md:container px-5 pt-14'>
          <h2 className='title'>{Hireme.title}</h2>
          <h4 className='subtitle'>{Hireme.subtitle}</h4>
          <br />
          <div className='flex items-center md:flex-row flex-col-reverse'>
            <img src={Hireme.image1} alt="" className='max-w-sm md:block hidden' />
            <div className='border-2 border-dark_primary max-w-sm p-10 shadow-sm rounded-x1 rounded-br-[8rem] sm:min-w-[22rem] marginb' style={{marginLeft: '50px'}}>
              <p className='leading-7'>{Hireme.para}</p>
              <br />
              <button className='btn bg-dark_primary text-white'>{Hireme.btnText}</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hireme;
