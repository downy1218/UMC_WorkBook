import styled from "styled-components";

export const NavTitle = styled.button`
    color:rgb(255, 71, 71);
    background: none;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
    width: 50px;
    border: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    /* display: flex;
    justify-content: start;
    text-decoration-style: none; 글자 밑에 줄 나타남;;*/
    font-weight:bold;
`
export const NavBtn = styled.div`
    display: flex;
    justify-content: end;
    margin-left:555px;
    gap: 15px;
    color: #FFFF;
    border: none;
    cursor: pointer;
    margin-right: 25px;
    /* margin-top: 0; */
    border-radius: 7px;    
    text-decoration-style: none;
`

//로그인버튼
export const NavBtn1 = styled.button`
    background: none;
    color: #FFFF;
    border: none;
    cursor: pointer;
`

//회원가입버튼
export const NavBtn2 = styled.button`
    background-color: rgb(255, 71, 71);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    padding-bottom: 1px;
    height: 25px;
    &:hover{
        background-color: rgb(255, 255, 255);
        color: rgb(255, 71, 71);
    }
`
export const SideBarStyle = styled.div`
    width:80px;
    height: auto;
    color:white;
    cursor:pointer;
    margin-top:30px;


`