//1. store 생성

import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "./todoSlice"; //export default로 내보낸 것은 중괄호 없이 가져와야함


export const store = configureStore({
    reducer:{
        todoFunctions: todoReducer
        // 'todoFunctions'라는 키로 리듀서를 등록
        // 이 이름은 useSelector에서 state.todoFunctions로 접근할 때 사용
    }
})