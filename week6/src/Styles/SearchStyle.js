import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const SearchInput = styled.input`
    width:1000px;
    height:50px;
    background-color:white;
    border-radius:15px 0 0 15px;
    border:none;
    padding-left:20px;
    font-size:18px;
    font-weight:bold;

`
export const SearchBtn = styled.button`
    width:80px;
    height:53px;
    background-color:rgb(255, 71, 71);
    color:white;
    font-weight:bold;
    border:none;
    border-radius:0 12px 12px 0;
    cursor:pointer;
`