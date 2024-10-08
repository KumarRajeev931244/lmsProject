import {configureStore} from '@reduxjs/toolkit'
import AuthSliceReducer from './slices/AuthSlice'
import courseSliceReducer from "./slices/CourseSlice"
import RazorpaySliceReducer from './slices/RazorpaySlice'

const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        course: courseSliceReducer,
        razorpay: RazorpaySliceReducer
    },
    devTools: true
})

export default store;