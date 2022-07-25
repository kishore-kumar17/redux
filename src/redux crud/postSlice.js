import { createSlice,CreateAsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
export const getpost = createAsyncThunk("posts/getpost",async ()=>{
    return fetch("").then((res)=>res.json());
});
const postslice = createSlice(({

}))