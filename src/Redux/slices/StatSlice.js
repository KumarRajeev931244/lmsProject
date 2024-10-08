import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    allUsersCount:0,
    subscribeSlice: 0
}

export const getStatsData = createAsyncThunk('stats/get', async() => {
    try {
        const response = axiosInstance.get('/admin/stats/user')
        toast.promise(response, {
            loading: "getting the stats...",
            success: (data) => {
                return data?.data?.message
            },
            error: 'failed to load data stats'
        })
        return (await response).data
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

const statSlice = createSlice({
    name:"state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStatsData.fulfilled, (state, action) => {
            state.allUsersCount = action?.payload?.allUsersCount
            state.subscribedCount = action?.payload?.subscribedUsersCount;
        })
    }
})
export default statSlice.reducer