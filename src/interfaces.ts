import { ReactNode } from "react"

export interface ISubmitForm {
    category: string
    amount: string
    difficulty: string
}
export interface IFilterFormProps {
    setUrl: (value: string) => void
    setAmount: (value: string) => void
}
export type QuestionType = {
    correct_answer: string
    incorrect_answers: string[]
    question: string
}
export interface IQuestionProps {
    questionObject: QuestionType
    setCorrect: (value: boolean | undefined) => void
    setCorrectAnswersCount: (value: number) => void
    correctAnswersCount: number
    setDisabledNextButton: (value: boolean) => void
    disabledNextButton: boolean
    setFinish: (value: boolean) => void
    currentQuestion: number
    selectedAnswer: string
    setSelectedAnswer: (value: string) => void
    amount: string
    setCurrentQuestion: (value: number) => void
    correct: boolean | undefined
    finish: boolean
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
    categoriesList: Categories
    questions: QuestionType[]
    token: string
    currentQuestion: number
    correct: boolean | undefined
    correctAnswersCount: number
    disabledNextButton: boolean
    finish: boolean
    selectedAnswer: string
    amount: string
    started: boolean
    category: string
    difficulty: string
    loading: boolean
}
export interface IGetQuestions {
    amount: string
    category?: string
    difficulty?: string
}