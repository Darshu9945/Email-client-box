import { createSlice } from "@reduxjs/toolkit";
const initialState ={sentdata:[],archivedata:[],isdelete:false,isarchive:false}
const sentdataSlice=createSlice({
    name:"sentdata",
    initialState,
    reducers:{

        addalldata(state,action){
state.sentdata=action.payload
        },
        archivedata(state,action){
            console.log(action.payload)
           state.archivedata.push(action.payload)
        },
        deletedata(state,action){
            state.sentdata=action.payload
        
            
        },
        archideletedata(state,action){
             state.archivedata=action.payload
        },
        isdeletehandler(state){
            state.isdelete=!state.isdelete
        },
        isarchivedata(state){
            state.isarchive=!state.isarchive
        },
        markdata(state,action){

        },
        allarchive(state,action){
            state.archivedata=action.payload
        }
       
    }

})
export const sentdatasliceaction=sentdataSlice.actions
export default sentdataSlice