import { combineReducers } from "redux";

import currentWordReducer from "./Slices/currentWordSlice";
import modalActions from './Slices/ModalSlice.js'
import themeColor from './Slices/themeColorSlice.js'

const rootReducer = combineReducers({
    currentWord : currentWordReducer,
    modalActions : modalActions, 
    themeColor : themeColor
})

export default rootReducer;