import { api } from "../../api/api";
import { AppDispatch } from "../store";
import { setCategories } from "./mainSlice";

export const getCategoriesThunk = () => async (dispatch: AppDispatch) => {
    try {
        const response = await api.getCategories()
        dispatch(setCategories(response.data.trivia_categories))
    } catch (error) {
        console.log(error);
    }
}
export const getQuestionsThunk = (amount: string, category: string, difficulty: string, token: string) => async(dispatch: AppDispatch) => {
    try {
        const response = await api.getQuestions(amount, category, difficulty, token)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}