import { useAppSelector } from "../hooks/redux"

const FinishedQuizPage = () => {
    const {correctAnswersCount} = useAppSelector(state => state.main)

    return <div>
        <h1>Your score is: {correctAnswersCount} right answers!</h1>
    </div>
}
export default FinishedQuizPage