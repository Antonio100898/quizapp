import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainSliceInitState } from "../../interfaces";



const initialState: IMainSliceInitState = {
    token: "",
    currentQuestion: 0,
    correct: undefined,
    correctAnswersCount: 0,
    disabledNextButton: true,
    finish: false,
    selectedAnswer: "",
    url: "",
    amount: "0",
    started: false
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
        setSelectedAnswer: (state, action: PayloadAction<string>) => {
            state.selectedAnswer = action.payload
        },
        setUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload
        },
        setStarted: (state, action: PayloadAction<boolean>) => {
            state.started = action.payload
        }
    }
});

export const { setAmount, setCorrect, setCorrectAnswersCount,
    setCurrentQuestion, setDisabledNextButton, setFinish,
    setSelectedAnswer, setStarted, setToken, setUrl, } = mainSlice.actions
export const mainReducer = mainSlice.reducer