import { useAppDispatch } from "../hooks/redux";
import { setDifficulty } from "../store/main/mainSlice";
import BackButton from "./BackButton";
import ChoiceButton from "./ChoiceButton";

const Step2 = (props: any) => {
  const dispatch = useAppDispatch();
  const difficultyHandler = (value: string) => {
    dispatch(setDifficulty(value));
    props.nextStep();
  };
  return (
    <div className="flex-box">
      <h1 className="header">Choose difficulty</h1>
      <ChoiceButton onClick={() => difficultyHandler("")}>any difficulty</ChoiceButton>
      <ChoiceButton onClick={() => difficultyHandler("easy")}>easy</ChoiceButton>
      <ChoiceButton onClick={() => difficultyHandler("medium")}>medium</ChoiceButton>
      <ChoiceButton onClick={() => difficultyHandler("hard")}>hard</ChoiceButton>
      <BackButton onClick={props.previousStep}>back</BackButton>
    </div>
  );
};
export default Step2;
