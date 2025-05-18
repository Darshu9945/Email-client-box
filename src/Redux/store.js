import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import searchSlice from "./search";
import maildataSlice from "./maildata";
import sentdataSlice from "./sendata";
import profileSlice from "./isprofiledata";
import starredSlice from "./starreddata";

const store=configureStore({
    reducer:{auth:authSlice.reducer,
    search:searchSlice.reducer,
    mail:maildataSlice.reducer,
    sent:sentdataSlice.reducer,
    profile:profileSlice.reducer,
    starred:starredSlice.reducer
}
})
export default store