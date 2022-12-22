import React, { useEffect, useState } from 'react';
import useTopics from '../../useHooks/useTopics';
import SingleTopic from '../SingleTopic/SingleTopic';


import './QuizTopics.css';

const QuizTopics = () => {

  const[topics, setTopics] = useTopics();
  // const[quiz, setQuiz] = useState();

  // const referredToSingleQuiz = (selectedQuiz) => {
  //   console.log(selectedQuiz)
  // }

  return (
    <div className='topics-area'>
      {
        topics.map(topic => <SingleTopic
        key={topic.id}
        topic={topic}
        // referredToSingleQuiz = {referredToSingleQuiz}
        ></SingleTopic>
        )
      }
    </div>
  );
};

export default QuizTopics;