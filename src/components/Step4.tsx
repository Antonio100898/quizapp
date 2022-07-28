import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useToken } from "../hooks/useToken"
import { getQuestionsThunk } from "../store/main/mainActions"
import { setToken } from "../store/main/mainSlice"

const Step4 = (props: any) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const localToken = useToken()

    useEffect(() => {
        if(localToken) dispatch(setToken(localToken))
    }, [localToken])

    const {amount, category, difficulty, token} = useAppSelector(state => state.main)
    const startingQuiz = async() => {
        dispatch(getQuestionsThunk(amount, category, difficulty, token))
        setTimeout(() => {
            navigate("/quiz")
        }, 1500)
    }
    return <div>
        <h1>Final here</h1>
        <button onClick={startingQuiz}>Start quiz!</button>
        <button onClick={props.previousStep}>back</button>
    </div>
}
export default Step4