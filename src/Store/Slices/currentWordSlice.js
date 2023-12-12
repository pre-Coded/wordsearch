import { createSlice } from "@reduxjs/toolkit";

const currentWordSlice = createSlice({
    name: 'currentWord',
    initialState: {
        value: {
            "word": "Mellifluous",
            "meaning": "(of a voice or words) Sweet or musical; pleasant to hear.",
            "partOfSpeech": "Adjective",
            "phonetic": "/məˈlɪf.lu.əs/"
        }
    },
    reducers: {
        setCurrentWord: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCurrentWord } = currentWordSlice.actions;
export default currentWordSlice.reducer;