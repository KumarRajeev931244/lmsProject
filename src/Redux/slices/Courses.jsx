import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const response = axiosInstance.get("/course")
        toast.promise(response, {
            loading: "loading course data...",
            success: "courses loaded successfully",
            error: "failed to get the coursed"
        })
        return (await response).data.course
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload){
                console.log(action.payload)
                state.courseData = [...action.payload]
            }
        })

    }
})

export default courseSlice.reducer;