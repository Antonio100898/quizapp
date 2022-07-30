import { ReactNode } from "react"

export type QuestionType = {
    correct_answer: string
    incorrect_answers: string[]
    question: string
}
export type RoutesType = {
    path: string;
    component: ReactNode;
}[];
export type Categories = {
        id: number
        name: string
}[]
export interface IMainSliceInitState {
    categoryName: string
    categoriesList: Categories
    questions: QuestionType[]
    token: string
    currentQuestion: number
    correct: boolean | undefined
    correctAnswersCount: number
    disabledNextButton: boolean
    finish: boolean
    selectedAnswer: string | null
    amount: string
    started: boolean
    category: string
    difficulty: string
    loading: boolean
}