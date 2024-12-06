import cartItems from "../constants/cartItems";
import { create } from "zustand";
{/*zustand version.*/ }

const useCart = create((set) => ({
    amount: 0,
    totalNum: cartItems.reduce((total, item) => { return total + item.amount }, 0), //장바구니 개수
    totalPrice: cartItems.reduce((total, item) => { return total + Number(item.price) }, 0), //총액
    cartItems: cartItems,

    increase: (itemId) => set((state) => {
        const updatedCartItems = state.cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    amount: item.amount + 1
                };
            }
            return item;
        });

        return {
            ...state,
            cartItems: updatedCartItems,
            totalNum: state.totalNum + 1,
            totalPrice: state.totalPrice + Number(updatedCartItems.find(item => item.id === itemId).price)
        };
    }),



    //수량감소
    decrease: (itemId) => set((state) => {
        const item = state.cartItems.find(item => item.id === itemId);

        if (item.amount === 1) {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItems => cartItems.id !== itemId),
                totalNum: state.totalNum - 1,
                totalPrice: state.totalPrice - Number(item.price)
            }
        } else {
            const updatedCartItems = state.cartItems.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    };
                }
                return item;
            });

            return {
                ...state,
                cartItems: updatedCartItems,
                totalNum: state.totalNum - 1,
                totalPrice: state.totalPrice - Number(updatedCartItems.find(item => item.id === itemId).price)
            }

        }
    }),

    // //아이템 빼기
    // removeItem: (itemId)=>set(()=>{
        
    // }),



    //초기화(모든 장바구니 아이템 제거)
    allClear: ()=>set(()=>({
        cartItems:[],
        totalNum:0,
        totalPrice:0
    }))

}));




const useModal = create((set)=>({
    isOpen:false,

    open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})



    //이렇게 하면 안됨 (객체 참조 문제)
    // open:()=>set((state)=>{
    //     state.isOpen = true
    // })
    // close:()=>set((state)=>{
    //     state.isOpen = false
    // })

    //open: () => set((state) => ({ ...state, isOpen: true })) 이렇게 해도 됨
}))






export { useCart , useModal };