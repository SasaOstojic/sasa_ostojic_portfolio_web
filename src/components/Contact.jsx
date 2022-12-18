import { createElement, useRef} from 'react';
import {content} from '../Content';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const {Contact} = content;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rbx3fnq', 'template_iyqm648', form.current, '-IPmsDdAjTWvpWBB3')
      .then((result) => {
        form.current.reset()
          toast.success('You re submitted successfully!')
      }, (error) => {
          form.current.reset()
          toast.error(error.text)
      });
  };

  return (
    <section className='bg-dark_primary text-white' id='contact'>
      <Toaster/>
      <div className='md:container pb-5 px-5 pt-14'>
          <h2 className='title !text-white' data-aos='fade-down'>{Contact.title}</h2>
          <h4 className='subtitle' data-aos='fade-down'>{Contact.subtitle}</h4>
          <br />
          <div className='flex gap-10 md:flex flex-col'>
            <form  ref={form} className='flex-1 flex flex-col gap-5' data-aos="fade-up" onSubmit={sendEmail}>
              <input type='text' name="from_name" placeholder="Name" required className='border border-slate-600 p-3 rounded' />
              <input type='email' name="user_email" placeholder="Email ID" required className='border border-slate-600 p-3 rounded' />
              <textarea name="message" placeholder='Message' className='border border-slate-600 p-3 rounded h-44' required ></textarea>
              <button className='btn self-start bg-white text-dark_primary'>Submit</button>
            </form>
            <div className='flex-1 flex flex-col gap-5'>
              {Contact.social_media.map((content, i) => (
                <div key={i} className='flex items-center gap-2'>
                  <h4 className='text-white'>{createElement(content.icon)}</h4>
                  <a className='font-Poppins' href={content.link} target='_blank'>{content.text}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
