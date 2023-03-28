import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from './Resumeslice'


export default configureStore({
    reducer:{
        userData:UserDataReducer,
    }
})