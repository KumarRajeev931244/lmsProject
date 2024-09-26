import {configureStore} from '@reduxjs/toolkit'
import AuthSliceReducer from './slices/AuthSlice'
import courseSliceReducer from "./slices/Courses"

const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        course: courseSliceReducer
    },
    devTools: true
})

export default store;