import { useEffect, useState } from "react";
import { IQuestionProps } from "../interfaces";

const Question: React.FC<IQuestionProps> = ({
  questionObject,
  setCorrect,
  setCorrectAnswersCount,
  correctAnswersCount,
  setDisabledNextButton,
  disabledNextButton,
  setFinish,
  currentQuestion,
  selectedAnswer,
  setSelectedAnswer,
  amount,
  setCurrentQuestion,
  correct,
  finish,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);
  const [questionString, setQuestion] = useState("");

  useEffect(() => {
    if (questionObject) {
      const { correct_answer, incorrect_answers, question } = questionObject;
      setCorrectAnswer(correct_answer);
      setIncorrectAnswers(incorrect_answers);
      setQuestion(question);
    }
  }, [questionObject]);

  const amountNumber = Number(amount);

  let joinedAnswers =
    incorrectAnswers &&
    correctAnswer &&
    incorrectAnswers.concat(correctAnswer).sort();

  const next = () => {
    if (correct) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    if (currentQuestion === amountNumber - 1) {
      setFinish(true);
    }
    setCorrect(undefined);
    if (!finish) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setDisabledNextButton(true);
    setSelectedAnswer("");
  };

  const correctAnswerHandler = (e: any) => {
    setSelectedAnswer(e.target.value);
    setDisabledNextButton(false);
    if (e.target.value === correctAnswer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <div>
      <div>{questionString && atob(questionString)}</div>
      <div>
        {joinedAnswers &&
          joinedAnswers.map((answer: string) => (
            <div key={answer}>
              <button
                className={
                  selectedAnswer === answer ? "classname" : "anotherclassname"
                }
                onClick={correctAnswerHandler}
                value={answer}
              >
                {answer && atob(answer)}
              </button>
            </div>
          ))}
      </div>
      <div>
        {currentQuestion <= amountNumber - 1 && (
          <button disabled={disabledNextButton} onClick={next}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
