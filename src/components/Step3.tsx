import { useAppDispatch } from "../hooks/redux"
import { setAmount } from "../store/main/mainSlice"

const Step3 = (props: any) => {
    const dispatch = useAppDispatch()
    
    const amountHandler = (value: string) => {
        dispatch(setAmount(value))
        props.nextStep()
    }

    return <div>
        <h1>How many questions</h1>
            <button onClick={() => amountHandler("10")}>10</button>
            <button onClick={() => amountHandler("15")}>15</button>
            <button onClick={() => amountHandler("20")}>20</button>
        <button onClick={props.previousStep}>back</button>
    </div>
}
export default Step3