import * as B from '../Styles/NavStyle';
import React, { useState } from 'react';
import MusicItem from './MusicItem';
import cartItems from "../constants/cartItems";
// import { useDispatch } from 'react-redux';
// import { allClear } from '../redux/slice';
// import { useSelector } from 'react-redux';
// import {open,close} from '../redux/modalSlice';
import Modal from './Modal';
import { useCart,useModal } from '../redux/store.js';

function Main(){

    // const dispatch = useDispatch();
    // const {isOpen} = useSelector(state=>state.modalFunctions)
    // const { cartItems,totalPrice} = useSelector(state=>state.musicFunctions);
    const totalPrice = useCart((state)=>state.totalPrice)
    const cartItems = useCart((state) => state.cartItems);
    const open = useModal((state) => state.open);
    const isOpen = useModal((state) => state.isOpen);



    return(
        <div>
            <B.Title>
                <h1>당신이 선택한 음반</h1>
            </B.Title>

            <div style={{zIndex:1, opacity: isOpen === true ? 0.4 : 1}}>
                {cartItems && cartItems.map((music,index)=>{
                    return(
                        <div>
                            <MusicItem key={music.id} music={music}/>
                        </div>
                    )
                })}   
                <hr/>
                <B.TotalPrice>
                    <p>총 가격 : </p>
                    <h2>{totalPrice}</h2>
                </B.TotalPrice>

                <B.MainBottom>
                    {
                        cartItems.length ===0 ? <B.AcBtn disabled='true'>장바구니 초기화 완료</B.AcBtn>
                        :
                        <B.AcBtn onClick={()=>open()} disabled ={isOpen}>장바구니 초기화</B.AcBtn>

                    }
                </B.MainBottom>
            </div>
            <Modal isOpen = {isOpen}/>
 
        </div>
    )
}

export default Main;