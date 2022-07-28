import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useToken } from "../hooks/useToken";
import { QuestionType } from "../interfaces";
import { setToken } from "../store/main/mainSlice";
//import Question from "./Question";

function Quizz() {
  const { questions, finish, amount, selectedAnswer, started, disabledNextButton, currentQuestion, correct, correctAnswersCount} = useAppSelector((state) => state.main);
  return (
    <div>
      {/* {questions.length > 0 && started && (
        <Question
          finish={finish}
          disabledNextButton={disabledNextButton}
          amount={amount}
          selectedAnswer={selectedAnswer}
          currentQuestion={currentQuestion}
          correctAnswersCount={correctAnswersCount}
          correct={correct}
          questionObject={questions[currentQuestion]}
        />
      )} */}
    </div>
  );
}
export default Quizz;
