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
    height:51px;
    background-color:rgb(255, 71, 71);
    color:white;
    font-weight:bold;
    border:none;
    border-radius:0 12px 12px 0;
    cursor:pointer;
`

export const GridContainer =styled.div`
    margin-left:100px;
    gap:10px;
    margin-top:30px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(140px, 1fr));
`