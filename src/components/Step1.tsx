import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getCategoriesThunk } from "../store/main/mainActions"
import { setCategory } from "../store/main/mainSlice"

const Step1 = (props: any) => {

    const {categoriesList} = useAppSelector(state => state.main)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategoriesThunk())
    }, [])

    const handleValueChange = (e: any) => {
        dispatch(setCategory(e.target.value))
    }
    return <div>
        <h1>Choose category: 
        <select onChange={handleValueChange}>
                    <option value="">Any</option>
                   {categoriesList.length > 0 && categoriesList.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                   ))}
        </select>
        </h1>
        <button onClick={props.nextStep}>go to step 2</button>
    </div>
}
export default Step1