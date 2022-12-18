import { useState } from 'react';
import {content} from '../Content'
import {HiMenuAlt2} from 'react-icons/hi'
import { createElement } from 'react';

const Navbar = () => {
  const {nav} = content;
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  return (

  <section className='w-full flex justify-center'>
    <div onClick={() => setShowMenu(!showMenu)} className='sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2'>
      <HiMenuAlt2 size={34}/>
    </div>
    <nav className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu ? 'bottom-10' : 'bottom-[-100%]'}`}>
      {
        nav.map((item, i) => (

          <a key={i} onClick={() => setActive(i)} href={item.link} className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${i === active && 'bg-dark_primary text-white'}`}>
            {createElement(item.icon)}
          </a>
        ))
      }
    </nav>
  </section>
  
  );
};

export default Navbar;
