import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name:"User",
    initialState:{
        logged:false,
        userMoblie:"",
        name:"",
        email:"",
        id:""
    },
    reducers:{
        UserLoggedIn:(state, action)=>{
           const {mobile , name , email,userId} =action.payload
            // todo:details will come from action
            state.userMoblie=mobile
            state.logged=true
            state.name=name
            state.email=email
            state.id=userId
        },

        UserLoggedOut:(state)=>{
            state.logged=false
            state.userMoblie=""
            state.name=""
            state.email=""
            state.id=""
        }
    }
})


// action creators are generated for each case 
export const {UserLoggedIn, UserLoggedOut} = loggedSlice.actions

export default loggedSlice.reducer
