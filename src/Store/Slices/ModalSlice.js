import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name : 'modalopenclose',
    initialState : {
        value : false
    }, 
    reducers : {
        toggleModal : (state) => {
            state.value = !state.value
        }
    }
})

export const { toggleModal } = ModalSlice.actions
export default ModalSlice.reducer