import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name:"Images",
    initialState:{
       url:"",
       part:""
    },
    reducers:{
        ImageDisplayShow:(state, action)=>{
           const {url,part} =action.payload
            // todo:details will come from action
            // console.log(url,"from action creatores")
            state.url=url
            state.part=part
           
        },

        ImageDisplayHide:(state)=>{
            state.url=""
            state.part=""
        }
    }
})


// action creators are generated for each case 
export const {ImageDisplayShow, ImageDisplayHide} = loggedSlice.actions

export default loggedSlice.reducer
