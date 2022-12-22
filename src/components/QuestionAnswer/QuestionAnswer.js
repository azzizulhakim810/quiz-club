import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import QuestionAnswerInDetail from "../QuestionAnswerInDetail/QuestionAnswerInDetail";

const QuestionAnswer = () => {
  const {quizId} = useParams();
  const [question, setQuestion] = useState({});

  useEffect(()=> {
    const url = `https://openapi.programming-hero.com/api/quiz/${quizId}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>setQuestion(data.data));
  },[])

  return (
    <div>

      <div className="lift-up"></div>

      <div className="w-8/12 bg-yellow-400 font-medium flex items-center justify-center mx-auto">
      <img className="w-10 mr-2 " src={question.logo} alt="" />
      <h1 className="text-3xl my-8 mr-2">Name : {question.name}</h1>
      
      <h1 className="text-xl my-8 mt-9">(Total Quizes: {question.total})</h1>
      
      </div>
      
      {
        question.questions?.map(ques =><QuestionAnswerInDetail
        key={ques.key}
        ques = {ques}
        ></QuestionAnswerInDetail>)
      }
      
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
};

export default QuestionAnswer;
