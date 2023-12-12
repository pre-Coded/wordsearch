import { createSlice } from "@reduxjs/toolkit";

const themeColor = createSlice({
    name : 'themecolor',
    initialState : {
        value : 'light'
    }, 
    reducers : {
        setThemeColor : (state, action) => {
            action.payload === 'light' ? 
            state.value = 'light' : 
            state.value = 'dark'
        }
    }
})

export const {setThemeColor} = themeColor.actions
export default themeColor.reducer;