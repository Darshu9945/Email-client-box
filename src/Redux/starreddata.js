import { createSlice } from "@reduxjs/toolkit";
const initialState ={data:[]}
const starredSlice=createSlice({
    name:"starred",
    initialState,
    reducers:{
        isstarredhandler(state){
            state.isstarred=true
        },
       addalldata(state,action){
            state.data=action.payload
        },
        addstarreddata(state,action){
           
           state.data.push(action.payload)
        }
    }

})
export const starredsliceaction=starredSlice.actions
export default starredSlice