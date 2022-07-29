import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, IMainSliceInitState, QuestionType } from "../../interfaces";



const initialState: IMainSliceInitState = {
    categoriesList: [],
    category: "",
    difficulty: "",
    token: "",
    questions: [],
    currentQuestion: 0,
    correct: undefined,
    correctAnswersCount: 0,
    disabledNextButton: true,
    finish: false,
    selectedAnswer: null,
    amount: "10",
    started: false,
    loading: false
}

const mainSlice = createSlice({
    initialState: initialState,
    name: "main",
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setCurrentQuestion: (state, action: PayloadAction<number>) => {
            state.currentQuestion = action.payload
        },
        setCorrect: (state, action: PayloadAction<boolean | undefined>) => {
            state.correct = action.payload
        },
        setCorrectAnswersCount: (state, action: PayloadAction<number>) => {
            state.correctAnswersCount = action.payload
        },
        setDisabledNextButton: (state, action: PayloadAction<boolean>) => {
            state.disabledNextButton = action.payload
        },
        setFinish: (state, action: PayloadAction<boolean>) => {
            state.finish = action.payload
        },
        setSelectedAnswer: (state, action: PayloadAction<string | null>) => {
            state.selectedAnswer = action.payload
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload
        },
        setStarted: (state, action: PayloadAction<boolean>) => {
            state.started = action.payload
        },
        setQuestions: (state, action: PayloadAction<QuestionType[]>) => {
            state.questions = action.payload
        },
        setCategories: (state, action: PayloadAction<Categories>) => {
            state.categoriesList = action.payload
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setDifficulty: (state, action: PayloadAction<string>) => {
            state.difficulty = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
});

export const { setAmount, setCorrect, setCorrectAnswersCount,
    setCurrentQuestion, setDisabledNextButton, setFinish,
    setSelectedAnswer, setStarted, setToken,
    setQuestions, setCategories, setCategory, setDifficulty, setLoading } = mainSlice.actions
export const mainReducer = mainSlice.reducer