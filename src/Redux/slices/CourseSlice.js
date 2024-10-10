import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/delete", async () => {
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

export const deleteCourse = createAsyncThunk("/course/get", async (id) => {
    try {
        const response = axiosInstance.delete(`/courses/${id}`)
        toast.promise(response, {
            loading: " deleting data...",
            success: "courses deleted successfully",
            error: "failed to delete the coursed"
        })
        return (await response).data.course
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

export const createNewCourse = createAsyncThunk("/course/create", async(data) => {
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.discription);
        formData.append("category", data?.category);
        formData.append("createdBy", data?.createdBy);
        formData.append("thumbnail", data?.thumbnail);

        const response = axiosInstance.post("/courses", formData)
        toast.promise(response, {
            loading: "creating new course",
            success: "course created successfully",
            error: "failed to create course"
        })
        return (await response).data
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