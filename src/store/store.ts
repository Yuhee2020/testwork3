import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {todolistReducer} from "./todolist-reducer";


export const rootReducer = combineReducers({
    todolist: todolistReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)})


// @ts-ignore
window.store = store

