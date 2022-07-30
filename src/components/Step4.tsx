import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setFinish } from "../store/main/mainSlice";
import BackButton from "./BackButton";
import ChoiceButton from "./ChoiceButton";

const Step4 = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { amount, categoryName, difficulty } = useAppSelector(
    (state) => state.main
  );
  const startingQuiz = async () => {
    dispatch(setFinish(false));
    setTimeout(() => {
      navigate("/quiz");
    }, 1500);
  };

  return (
    <div className="flex-box">
      <h1 className="header">Please confirm before we start the quiz</h1>
      <div className="flex flex-col justify-between h-28 mt-10">
        <p className="text-sm">
          Category of questions will be:{" "}
          <span className="highligth">{categoryName !== "" ? categoryName : "any"}</span>
        </p>
        <p className="text-sm">
          You have chosen <span className="highligth">{difficulty !== "" ? difficulty : "any"}</span> difficulty
        </p>
        <p className="text-sm">You going to answer on <span className="highligth">{amount}</span> questions</p>
      </div>
      <div className="mt-10 flex w-1/3 justify-between">
        <ChoiceButton onClick={startingQuiz}>Start quiz!</ChoiceButton>
        <BackButton onClick={props.previousStep}>back</BackButton>
      </div>
    </div>
  );
};
export default Step4;
