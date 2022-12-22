import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './QuestionAnswerInDetail2.css'


const QuestionAnswerInDetail2 = ({option, ques}) => {

  const isCorrect = () => {
    if(ques.correctAnswer === option) {
      toast.success('Correct Answer ✔', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message2'
    });
     } else {
      toast.error('Incorrect Answer ❌', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message2'
    });
    }
  }
  return (
    <div className='flex items-center justify-center border-2 border-red-200 mt-3 bg-yellow-200 hover:bg-yellow-400 hover:text-white'>
       

       <button onClick={isCorrect} className='my-2 py-2'><h1>{option}</h1></button>
       <ToastContainer />
       
    </div>
  );
};

export default QuestionAnswerInDetail2;