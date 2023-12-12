import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Reducers.js'

const store = configureStore({
    reducer : rootReducer
})

export default store;