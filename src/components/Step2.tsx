import { useAppDispatch } from "../hooks/redux";
import { setDifficulty } from "../store/main/mainSlice";

const Step2 = (props: any) => {
  const dispatch = useAppDispatch();
  const difficultyHandler = (value: string) => {
    dispatch(setDifficulty(value));
    props.nextStep();
  };
  return (
    <div>
      <h1>Choose difficulty</h1>
      <button onClick={() => difficultyHandler("")}>any difficulty</button>
      <button onClick={() => difficultyHandler("easy")}>easy</button>
      <button onClick={() => difficultyHandler("medium")}>medium</button>
      <button onClick={() => difficultyHandler("hard")}>hard</button>
      <button onClick={props.previousStep}>back</button>
    </div>
  );
};
export default Step2;
