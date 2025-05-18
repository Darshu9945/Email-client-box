import { createSlice } from "@reduxjs/toolkit";
const initialState ={islogin:"false",userdata:''}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginhandler(state){
            state.islogin=true
        },
        logouthandler(state){
            console.log(state.islogin)
            state.islogin=false
        },
        userdatahandler(state,action){
          state.userdata=action.payload
        }
    }

})
export const authsliceaction=authSlice.actions
export default authSlice