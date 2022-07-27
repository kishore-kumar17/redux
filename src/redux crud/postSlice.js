import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    loading :false,
    posts:[],
    error:"",
}

export const fetchUsers =createAsyncThunk('post/fetchUsers',()=>{
    return axios
    .get ("https://mocki.io/v1/c767e43d-0c00-470f-913b-95a07e1c9a03")
    .then((res)=>res.data
    )
})

export const addUsers =createAsyncThunk ('post/addUsers',(val)=>{
    return axios
    .post("https://mocki.io/v1/c767e43d-0c00-470f-913b-95a07e1c9a03",val)
    .then((responce)=>responce.data)
})

const postSlice = createSlice ({
    name:'post',
    initialState,
    extraReducers:(bulider)=>{
        bulider.addCase(fetchUsers.pending,(state)=>{
            state.loading=true  
        })
        bulider.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading =false
            state.posts =action.payload
            state.error=''
        })
        bulider.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.posts=[]
            state.error=action.error.message
        })
    }
})

export default postSlice.reducer