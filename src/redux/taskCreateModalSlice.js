import { createSlice } from "@reduxjs/toolkit";

const taskCreateModalSlice = createSlice({
    initialState:{
        isModal:false,
    },
    name: 'ModalOpener',

    reducers:{
        toggleModal: (state, action) =>{
            state.isModal = !state.isModal;
        }
    }
})

export const { toggleModal } = taskCreateModalSlice.actions;
export default taskCreateModalSlice.reducer;