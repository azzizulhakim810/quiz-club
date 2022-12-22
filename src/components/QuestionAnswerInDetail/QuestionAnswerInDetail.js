import React from 'react';
import QuestionAnswerInDetail2 from './QuestionAnswerInDetail2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

const correctAnswer = (ques2) => {
  toast.success(ques2, {
    position: toast.POSITION.TOP_CENTER,
    className: 'toast-message2'
  })
};

const QuestionAnswerInDetail = ({ques}) => {
  // console.log(ques);
  return (
    <div className='mx-auto mt-10 mb-16 rounded-lg rounded-b-full shadow-2xl w-10/12 py-5'>
      
     <div className='flex justify-evenly w-10/12 mx-auto p-3 my-8 rounded-lg font-serif text-2xl '>
     <h1>{ques.question} 
     
    </h1>
    <button onClick={() => correctAnswer(ques.correctAnswer)} className='text-orange-500 pl-2'>
    <FontAwesomeIcon icon={faEye} />
    </button>
  
     </div>

     <div className='w-6/12 mx-auto p-3 pb-10 my-8 rounded-lg text-xl'>
     
     <div>
      {
        ques.options.map(option => 
        
        <QuestionAnswerInDetail2
        option = {option}
        ques = {ques}
        ></QuestionAnswerInDetail2>)
      }
     </div>

     </div>
      
    </div>
  );
};

export default QuestionAnswerInDetail;