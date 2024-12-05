import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
};

const modalSlice = createSlice({
    name:'modalFunctions',
    initialState,
    reducers:{
        //모달 열기
        open: (state,action)=>{
            state.isOpen = true
        },
        //모달 닫기
        close:(state,action)=>{
            state.isOpen = false
        }
    }
})
export const {open,close} = modalSlice.actions
export default modalSlice.reducer