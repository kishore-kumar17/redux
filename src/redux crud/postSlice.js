import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// actions here

export const fetchUsers = createAsyncThunk("post/fetchUsers", () => {
  return axios.get("http://localhost:9000/posts").then((res) => res.data)
});

export const addUsers = createAsyncThunk('post/addusers', (val) =>{
  // console.log(val)
  return axios.post('http://localhost:9000/posts',val)
  .then((responce) => responce.data)
  // .catch((error)=>error.data)
})


export const deleteUsers =createAsyncThunk('post/deleteusers',(users)=>{
  // console.log(users)
  return axios.delete(`http://localhost:9000/posts/${users}`)
  .then ((res)=>res.data)
})

export const editUsers = createAsyncThunk ('post/editusers',(changeval)=>{
  // console.log(changeval)
  return axios
  .put(`http://localhost:9000/posts/${changeval.id}`,changeval)
  .then((res)=>res.data)
})






const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (bind) => {
    bind.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    bind.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    });
    bind.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});


export default postSlice.reducer;
