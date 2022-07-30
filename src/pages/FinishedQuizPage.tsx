import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const FinishedQuizPage = () => {
  const { correctAnswersCount } = useAppSelector((state) => state.main);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="header text-white">
        Your score is: {correctAnswersCount} right answers!
      </h1>
      <button
        className="link"
        onClick={() => navigate("/")}
      >
        Go home
      </button>
    </div>
  );
};
export default FinishedQuizPage;
