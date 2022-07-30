import { useAppDispatch } from "../hooks/redux";
import { setAmount } from "../store/main/mainSlice";
import BackButton from "./BackButton";
import ChoiceButton from "./ChoiceButton";

const Step3 = (props: any) => {
  const dispatch = useAppDispatch();

  const amountHandler = (value: string) => {
    dispatch(setAmount(value));
    props.nextStep();
  };

  return (
    <div className="flex-box">
      <h1 className="header">Choose amount of questions</h1>
      <ChoiceButton onClick={() => amountHandler("10")}>10</ChoiceButton>
      <ChoiceButton onClick={() => amountHandler("15")}>15</ChoiceButton>
      <ChoiceButton onClick={() => amountHandler("20")}>20</ChoiceButton>
      <BackButton onClick={props.previousStep}>back</BackButton>
    </div>
  );
};
export default Step3;
