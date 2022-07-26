import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { mainReducer } from "./main/mainSlice";

const rootReducer = combineReducers({
    main: mainReducer
})
export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']