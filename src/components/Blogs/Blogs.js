import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {
  return (
    <div className='lift-up'>
      
      <div className='pt-48'>
      <div className='mx-auto mb-16 rounded-lg rounded-b-full shadow-2xl w-8/12 py-10 px-5'>
                <h2 className='text-3xl'>What is the purpose of react router?</h2>
                <p className='text-lg w-10/12 mx-auto py-4 text-gray-600'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
      </div>
      <div className='mx-auto mb-16 rounded-lg rounded-b-full shadow-2xl w-8/12 py-10 px-5'>
                <h2 className='text-3xl'>How does context api work?</h2>
                <p className='text-lg w-10/12 mx-auto py-4 text-gray-600'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
      </div>
      <div className='mx-auto mb-16 rounded-lg rounded-b-full shadow-2xl w-8/12 py-10 px-5'>
                <h2 className='text-3xl'>Use of react hook useRef?</h2>
                <p className='text-lg w-10/12 mx-auto py-4 text-gray-600'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
      </div>
      </div>

      <div className='pb-1'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;