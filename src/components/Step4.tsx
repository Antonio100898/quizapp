import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks/redux"
import { setFinish } from "../store/main/mainSlice"

const Step4 = (props: any) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const startingQuiz = async() => {
        dispatch(setFinish(false))
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