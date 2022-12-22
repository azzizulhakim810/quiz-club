import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const[navbar, setNavbar] = useState(false);

  const changeBackground = () => {

    if(window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll",changeBackground);



  return (
    <div className={navbar ? 'header active' : 'header'}>
     <nav className='flex justify-between p-8 px-20 '>
      
      <div>
        <Link to='/'>
        <h1 className='text-3xl font-medium'>QUIZ<span className='text-yellow-300'>CLUB</span></h1>
        </Link>
      </div>

      <div className='text-lg'>
      <Link className='mr-8' to='/home'>Home</Link>
      <Link className='mr-8' to='/alltopics'>Topics</Link>
      <Link className='mr-8' to='/statistics'>Statistics</Link>
      <Link className='mr-0' to ='/blogs'>Blogs</Link>
      </div>

     </nav>
    </div>
  );
};

export default Header;