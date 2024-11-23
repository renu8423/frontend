import { configureStore } from "@reduxjs/toolkit";
import authSliceReduser from "./slices/AuthSlice"

const store = configureStore({
    reducer:{
        auth:authSliceReduser
    },
    devTools:true
});



export default store