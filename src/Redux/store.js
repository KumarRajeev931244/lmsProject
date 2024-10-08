import {configureStore} from '@reduxjs/toolkit'
import AuthSliceReducer from './slices/AuthSlice'
import courseSliceReducer from "./slices/CourseSlice"
import RazorpaySliceReducer from './slices/RazorpaySlice'
import lectureSliceReducer from './slices/LectureSlice'
import statSliceReducer from './slices/StatSlice'

const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        course: courseSliceReducer,
        razorpay: RazorpaySliceReducer,
        lecture: lectureSliceReducer,
        stat: statSliceReducer
    },
    devTools: true
})

export default store;