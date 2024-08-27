import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:"filterData",
    initialState:{
        owner:"",
        year:"",
        regisCity:"",
        km:"",
        transmission:"",
        type:"",
        // model:[],
        change:""
    },
    reducers:{
        AddToFilters:(state, action)=>{
            const {model, owner, year, regisCity, km, transmission,type} =action.payload
            state.model=model
            state.owner=owner
            state.year=year
            state.regisCity=regisCity
            state.km=km
            state.transmission=transmission
            state.type=type
           
        },

        ClearFilter:(state)=>{
            state.model=[]
            state.owner=""
            state.year=""
            state.regisCity=""
            state.km=""
            state.transmission=""
            state.type=""
        }
    }
})
export const {AddToFilters, ClearFilter} = filterSlice.actions

export default filterSlice.reducer