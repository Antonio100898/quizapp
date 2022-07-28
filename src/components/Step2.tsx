import { useAppDispatch } from "../hooks/redux"
import { setDifficulty } from "../store/main/mainSlice"

const Step2 = (props: any) => {
    const dispatch = useAppDispatch()
    const handleValueChange = (e: any) => {
        dispatch(setDifficulty(e.target.value))
    }
    return <div>
        <h1>Choose difficulty</h1>

        <select onChange={handleValueChange}>
                    <option>Choose defficulty</option>
                    <option value="">any difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                  </select>
        <button onClick={props.nextStep}>go to step 3</button>
        <button onClick={props.previousStep}>back</button>
    </div>
}
export default Step2