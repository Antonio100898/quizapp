import { api } from "../../api/api";
import { AppDispatch } from "../store";
import { setCategories, setCorrectAnswersCount, setCurrentQuestion, setFinish, setLoading, setQuestions, setStarted } from "./mainSlice";

export const getCategoriesThunk = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await api.getCategories()
        dispatch(setCategories(response.data.trivia_categories))
    } catch (error) {
        console.log(error);
    }
    dispatch(setLoading(false))
}
export const getQuestionsThunk = (amount: string, category: string, difficulty: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await api.getQuestions(amount, category, difficulty, token)
        if (response.data.response_code === 3 || response.data.response_code === 4) {
            try {
                const response2 = await api.resetToken(token)
                localStorage.setItem("token", response2.data.token)
                const response3 = await api.getQuestions(amount, category, difficulty, response2.data.token)
                dispatch(setQuestions(response3.data.results))
            } catch (error) {
                console.log(error);
            }
        } else if (response.data.response_code === 0) {
            dispatch(setQuestions(response.data.results))
            localStorage.setItem("questions", JSON.stringify(response.data.results))
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
    dispatch(setLoading(false))
}
export const newQuizReset = (dispatch: AppDispatch) => {
    dispatch(setCurrentQuestion(0))
    dispatch(setCorrectAnswersCount(0))
    dispatch(setStarted(true));
}
export const finishQuiz = (dispatch: AppDispatch) => {
    dispatch(setFinish(true));
    dispatch(setStarted(false));
    dispatch(setCurrentQuestion(0));
    localStorage.removeItem("questions");
}