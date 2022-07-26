import axios from "axios";
import { useEffect, useState } from "react";
import { QuestionType } from "../interfaces";
import FilterForm from "./FilterForm";
import Question from "./Question";

function Quizz() {
    const [token, setToken] = useState("");
    const [questions, setQuestions] = useState<QuestionType[] | []>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correct, setCorrect] = useState<boolean | undefined>(undefined);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [disabledNextButton, setDisabledNextButton] = useState(true);
    const [finish, setFinish] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [url, setUrl] = useState("");
    const [amount, setAmount] = useState("0");
    const [started, setStarted] = useState(false);
    const amountNumber = Number(amount)
    
    useEffect(() => {
      handleToken();
      setAmount("0");
    }, []);

    const getTokenLocal = () => {
      let token = localStorage.getItem("token")
      return token? token : " "
    }
    const handleToken = async () => {
      if (localStorage.getItem("token") === null) {
        try {
          let response = await axios.get(
            "https://opentdb.com/api_token.php?command=request"
          );
          setToken(response.data.token);
          localStorage.setItem("token", JSON.stringify(response.data.token));
        } catch (error) {
          console.log(error);
        }
      } else {
        let localToken = JSON.parse(getTokenLocal());
        setToken(localToken);
      }
    };
    const getQuestions = async () => {
      try {
        let response = await axios.get(url + "&token=" + token);
        setQuestions(response.data.results);
        setCurrentQuestion(0);
        setCorrectAnswersCount(0);
        setStarted(true);
        setFinish(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div >
        <div >
          <div >Quizz App by Anton Mishanin</div>
          <button
            disabled={(!url || amountNumber === 0 || amount === undefined)}
            
            onClick={getQuestions}
          >
            Start new quizz
          </button>
        </div>
        <div >
          <FilterForm setAmount={setAmount} setUrl={setUrl} />
        </div>
        <div >
          {questions.length > 0 && started && (
            <Question
              finish={finish}
              setCurrentQuestion={setCurrentQuestion}
              disabledNextButton={disabledNextButton}
              amount={amount}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              currentQuestion={currentQuestion}
              setFinish={setFinish}
              setDisabledNextButton={setDisabledNextButton}
              correctAnswersCount={correctAnswersCount}
              setCorrectAnswersCount={setCorrectAnswersCount}
              correct={correct}
              setCorrect={setCorrect}
              questionObject={questions[currentQuestion]}
            />
          )}
          <div >
            {finish && (
              <div>You got {correctAnswersCount} correct answers, well done!</div>
            )}
          </div>
        </div>
        {!finish && amountNumber > 0 && started && (
          <div >
            {currentQuestion + 1} / {amountNumber}
          </div>
        )}
      </div>
    );
  }
  export default Quizz;