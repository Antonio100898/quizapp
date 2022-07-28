import { useAppDispatch } from "../hooks/redux"
import { setAmount } from "../store/main/mainSlice"

const Step3 = (props: any) => {
    const dispatch = useAppDispatch()
    
    const handleValueChange = (e: any) => {
        dispatch(setAmount(e.target.value))
        console.log(e.target.value);
    }

    return <div>
        <h1>How many questions</h1>
        <select onChange={handleValueChange}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
        <button onClick={props.nextStep}>go to step 4</button>
        <button onClick={props.previousStep}>back</button>
    </div>
}
export default Step3