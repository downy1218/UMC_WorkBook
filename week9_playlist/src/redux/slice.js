import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";

const initialState = {
    amount:0,
    totalNum: cartItems.reduce((total,item)=>{return total + item.amount},0), //장바구니 개수
    totalPrice:cartItems.reduce((total,item)=>{return total + Number(item.price)},0), //총액
    cartItems:cartItems
}
console.log(cartItems)

export const cartSlice = createSlice({
    name:'musicFunctions',
    initialState,
    reducers:{
        //수량추가
        increase:(state,action)=>{
            const itemId = action.payload;
            const item = state.cartItems.find(cartItems =>cartItems.id === itemId);
            console.log(item)
            item.amount +=1; //수량추가
            state.totalNum ++; //장바구니 개수 추가
            state.totalPrice += Number((item.amount + item.price)); //총액에 더하기

        },
        //수량감소
        decrease:(state,action)=>{
            const itemId = action.payload;
            const item = state.cartItems.find(cartItems =>cartItems.id === itemId);
            if(item){
                if (item.amount === 1){
                    state.cartItems = state.cartItems.filter(cartItems =>cartItems.id !== itemId);
                    state.totalNum -=1;
                    state.totalPrice -= Number((item.amount + item.price));
                }
                else{
                    item.amount -=1;
                    state.totalNum -=1;
                    state.totalPrice -= Number((item.amount + item.price));
                }
            }
        },
        //아이템 빼기
        removeItem:(state,action)=>{
            const itemId = action.payload;
            return state.cartItems.filter(cartItems =>cartItems.id !== itemId);
        },
        //초기화(모든 장바구니 아이템 제거)
        allClear:(state)=>{
            state.cartItems = [];
            state.totalNum = 0; //장바구니 개수 0으로 초기화
            state.totalPrice = 0;

        }

    }
});

export const {increase ,decrease, removeItem,allClear, calculate} = cartSlice.actions 
export default cartSlice.reducer 