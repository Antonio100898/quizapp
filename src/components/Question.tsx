import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { finishQuiz } from "../store/main/mainActions";
import {
  setCorrect,
  setCorrectAnswersCount,
  setCurrentQuestion,
  setDisabledNextButton,
  setSelectedAnswer,
} from "../store/main/mainSlice";
import NextButton from "./NextButton";

const Question = () => {
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);
  const [questionString, setQuestion] = useState<string>("");
  const [joinedAnswers, setJoinedAnswers] = useState<string[]>([]);
  const {
    disabledNextButton,
    selectedAnswer,
    questions,
    correctAnswersCount,
    currentQuestion,
    amount,
    correct,
    finish,
  } = useAppSelector((state) => state.main);

  const amountNumber = Number(amount);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (questions[currentQuestion]) {
      const { correct_answer, incorrect_answers, question } =
        questions[currentQuestion];
      setCorrectAnswer(correct_answer);
      setIncorrectAnswers(incorrect_answers);
      setQuestion(question);
    }
  }, [currentQuestion]);

  useEffect(() => {
    setJoinedAnswers(incorrectAnswers.concat(correctAnswer).sort());
  }, [correctAnswer, incorrectAnswers]);

  const nextButtonClick = () => {
    if (correct) {
      dispatch(setCorrectAnswersCount(correctAnswersCount + 1));
    }
    if (currentQuestion === amountNumber - 1) {
      dispatch(finishQuiz)
      navigate("/finishedquiz");
    }
    dispatch(setCorrect(undefined));

    if (currentQuestion !== amountNumber - 1 && !finish) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
    dispatch(setDisabledNextButton(true));
    dispatch(setSelectedAnswer(null));
  };

  const correctAnswerHandler = (answer: string) => {
    dispatch(setSelectedAnswer(answer));
    dispatch(setDisabledNextButton(false));
    answer === correctAnswer
      ? dispatch(setCorrect(true))
      : dispatch(setCorrect(false));
  };
  
  return (
    <div>
      <div className="text-center">{questionString && atob(questionString)}</div>
      {selectedAnswer === null ? (
        <div className="answers_wrapper">
          {joinedAnswers.length > 0 &&
            joinedAnswers.map((answer: string) => (
              <div key={answer}>
                <button
                  className="answer-btn"
                  onClick={() => correctAnswerHandler(answer)}
                >
                  {answer && atob(answer)}
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div className="answers_wrapper">
          {joinedAnswers.length > 0 &&
            joinedAnswers.map((answer: string) => (
              <div
                key={answer}
                className={
                  correctAnswer === answer ? "correct_answer" : "incorrect_answer"
                }
              >
                {answer && atob(answer)}
              </div>
            ))}
        </div>
      )}

      <div className="text-center">
        {currentQuestion <= amountNumber - 1 && (
          <NextButton disabled={disabledNextButton} onClick={nextButtonClick}>
            next
          </NextButton>
        )}
      </div>
    </div>
  );
};

export default Question;
