import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-left:500px;
    

`
export const Modal = styled.div`
    z-index:50;
    width:600px;
    height:140px;
    background-color: rgba(105, 71, 255, 0.81); 
    border-radius:15px;

`
export const Modaldetail = styled.div`
    display:flex;
    justify-content:center;
    h2{
        color:white;
    }
`
export const Answer = styled.div`
    display:flex;
    justify-content:center;
    gap:50px;
    padding-top:0;
    
`
export const Yes = styled.button`
    font-size:18px;
    background:none;
    border:none;
    cursor:pointer;
    &:hover{
        background:blue;
        color:white;
        border-radius:5px;
    }
`
export const No = styled.button`
    background:none;
    border:none;
    cursor:pointer;
    font-size:18px;
    &:hover{
        background:red;
        color:white;
        border-radius:5px;
    }
`