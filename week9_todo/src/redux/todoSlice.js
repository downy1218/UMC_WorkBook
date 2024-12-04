//3. slice 생성
import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
    name:'todoFunctions',
    initialState,
    reducers:{
        add:(state,action)=>{
            nextId++;
            state.push({
                id:nextId,
                text:action.payload,
                complete:false
            })
        },
        remove:(state,action)=>{
            return state.filter(e=>e.id !== action.payload)
            // return state.filter(e=>e.id !== state.id) state는 배열이라 id를 꺼내쓸 수 없음
        },
        complete:(state,action)=>{
            return state.map((e)=>{
                return e.id === action.payload ? {...e, complete:!e.complete} :e
            })
        }
    }
});

export const {add , remove, complete} = todoSlice.actions 
//store에서 add, remove, complte 액션을 내보낸다.
export default todoSlice.reducer //이게 store.js에 읶는 todoReducer가 됨