import React from 'react';
import Footer from '../Footer/Footer';
import QuizTopics from '../QuizTopics/QuizTopics';
import './AllTopics.css';

const AllTopics = () => {
  return (
    <div>
      
      <div className='lift-up'>
        
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

export default AllTopics;