import { createSlice } from "@reduxjs/toolkit";
const initialState ={islogin:"false"}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginhandler(state){
            state.islogin=true
        },
        logouthandler(state){
            state.islogin=false
        }
    }

})
export const authsliceaction=authSlice.actions
export default authSlice