import React from 'react';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
      <HeroSection></HeroSection>
      </div>

      <div>
      <h1 className='w-1/6 mx-auto text-4xl font-semibold my-10 border-b-4 pb-3 border-orange-400'>All the Topics</h1>
      <QuizTopics></QuizTopics>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>

  );
};

export default Home;