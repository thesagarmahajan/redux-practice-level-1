import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import loggedReducer from "./islogged";
import userdataReducer from "./userdata";

const allReducers = combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
    userdata:userdataReducer
})

export  {allReducers};