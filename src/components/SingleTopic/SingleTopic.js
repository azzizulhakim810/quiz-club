import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleTopic = ({topic}) => {
  console.log(topic);
  // const {referredToSingleQuiz} = props;
  const{id, name, logo, total} = topic;
  
  
  return (
    
    <div>

    <div className="p-7">  
    <div className="max-w-sm rounded overflow-hidden  shadow-2xl">
    <img className="w-full bg-amber-300 " src={logo} alt="Mountain"/>
    
    {/* Middle part  */}

    <div className="py-4 w-50 mx-auto">
      
      <div className="font-bold text-xl mb-2">{name}</div>
      
      <div className="py-2 px-5 flex align-middle justify-between">
      
      <div>
     <p className="text-white text-base bg-black p-2 px-4 rounded">
        Quiz: {total}
      </p>
     </div>

      <div>
        
        <button className="text-white text-base bg-black p-2 px-4 rounded">
          <Link to={`/quiz/${id}`}>Enroll Here</Link>
          </button>
        
        <ToastContainer />
      </div>
      </div>

    </div>

    

    </div>
  </div>  

    </div>

  );
};

export default SingleTopic;