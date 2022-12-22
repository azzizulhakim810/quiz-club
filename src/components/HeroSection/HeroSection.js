import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <div className='background'>
    {/* <div className="overlay" style={{background: `url(${HeroImage})`}}/> */}
          {/* <div className="bg-[url('/src/images/shubham-sharan-Z-fq3wBVfMU-unsplash (1).jpg')]">
      <img className='w-auto' src={HeroImage} alt="" />
    </div> */}
    {/* <img className='w-auto' src={HeroImage} alt="" /> */}

    <h1 className='text-6xl font-bold text-white translate-y-60 '>GRAB THE BADGES <br/>BY QUICK QUIZ</h1>
    <p className=' text-white translate-y-60 mt-3 w-3/6 m-auto'>The creative place where you can hone your programming language skill & get exclusive awards along with certificates from well-known universities</p>
    </div>
  );
};

export default HeroSection;