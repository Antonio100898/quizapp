import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setCorrect,
  setCorrectAnswersCount,
  setCurrentQuestion,
  setDisabledNextButton,
  setFinish,
  setSelectedAnswer,
} from "../store/main/mainSlice";

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
    finish && navigate("/gettingstarted");
  }, [finish]);

  useEffect(() => {
    setJoinedAnswers(incorrectAnswers.concat(correctAnswer).sort());
  }, [correctAnswer, incorrectAnswers]);

  const nextButtonClick = () => {
    if (correct) {
      dispatch(setCorrectAnswersCount(correctAnswersCount + 1));
    }
    if (currentQuestion === amountNumber - 1) {
      dispatch(setFinish(true));
      localStorage.removeItem("questions");
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
      <div>{questionString && atob(questionString)}</div>
      {selectedAnswer === null ? (
        <div>
          {joinedAnswers.length > 0 &&
            joinedAnswers.map((answer: string) => (
              <div key={answer}>
                <button
                  className="bg-white"
                  onClick={() => correctAnswerHandler(answer)}
                >
                  {answer && atob(answer)}
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div>
          {joinedAnswers.length > 0 &&
            joinedAnswers.map((answer: string) => (
              <div key={answer}>
                <div
                  className={
                    selectedAnswer === answer ? "bg-green-400" : "bg-red-400"
                  }
                >
                  {answer && atob(answer)}
                </div>
              </div>
            ))}
        </div>
      )}

      <div>
        {currentQuestion <= amountNumber - 1 && (
          <button disabled={disabledNextButton} onClick={nextButtonClick}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
