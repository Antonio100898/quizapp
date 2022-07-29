import { api } from "../../api/api";
import { AppDispatch } from "../store";
import { setCategories, setLoading, setQuestions } from "./mainSlice";

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
export const getQuestionsThunk = (amount: string, category: string, difficulty: string, token: string) => async(dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await api.getQuestions(amount, category, difficulty, token)
        dispatch(setQuestions(response.data.results))
        localStorage.setItem("questions", JSON.stringify(response.data.results))
    } catch (error) {
        console.log(error);
    }
    dispatch(setLoading(false))
}