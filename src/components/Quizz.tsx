import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getQuestionsThunk, newQuizReset } from "../store/main/mainActions";
import { setQuestions } from "../store/main/mainSlice";
import { Loader } from "./Loader";
import Question from "./Question";

function Quizz() {
  const { started, questions, amount, category, difficulty, token, loading } =
    useAppSelector((state) => state.main);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const items = localStorage.getItem("questions");
    if (items === null) {
      dispatch(getQuestionsThunk(amount, category, difficulty, token));
    } else {
      dispatch(setQuestions(JSON.parse(items)));
    }
    dispatch(newQuizReset)
  }, [amount, category, difficulty, token]);


  if (loading) return <Loader />;
  else return <>{questions.length > 0 && started && <Question />}</>;
}
export default Quizz;
