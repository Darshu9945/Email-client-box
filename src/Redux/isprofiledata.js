import { createSlice } from "@reduxjs/toolkit";
const initialState ={isprofile:false,userdata:'',profiledata:[{gmail:"",name:""}]}
const profileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{
        isprofilehandler(state){
            state.isprofile=true
        },
        closeprofile(state){
            state.isprofile=false
        },
        addprofiledata(state,action){
            console.log(action.payload)
           state.profiledata=action.payload
        }
    }

})
export const profilesliceaction=profileSlice.actions
export default profileSlice