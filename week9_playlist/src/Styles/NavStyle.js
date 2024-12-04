import styled from "styled-components";

export const NavContainer = styled.div`
    width:100%;
    height:70px;
    background-color:rgba(105, 71, 255, 0.81);
    display:flex;
    align-items:center;
    gap:650px;
    h1{
        margin-left:350px;
        color:rgba(37, 37, 37, 0.81);
    }
`
export const CartIcon = styled.div`
    display:flex;
    justify-content:end;
    width:50px;
`

export const Title = styled.div`
    display:flex;
    justify-content:center;
    margin-top:30px;
`

export const Album = styled.div`
    width:100px;
    height:100px;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`
export const Container = styled.div`
    display:flex;
    gap:70px;
    margin-left:350px;
    margin-top:50px;
`
export const MusicInfo = styled.div`
    width:500px;
    h2{
        margin-top:0;
        font-size:18px;
    }
    p{
        padding-top:0;
        color:rgba(105, 71, 255, 0.81);
    }
`
export const MusicAmount = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:20px;

  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`
export const IconWrapper = styled.div`
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease; 
  
  &:hover {
    opacity: 0.7;
    transform: scale(1.1); 
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
export const TotalPrice = styled.div`
    display:flex;
    margin-left:350px;
    p{
        font-size:20px;
    }
    h2{
        margin-left:700px;
    }
`
export const MainBottom = styled.div`
    display:flex;
    justify-content:center;
    height:100px;
`
export const AcBtn = styled.button`
    cursor:pointer;
    width:200px;
    height:30px;
    background-color:white;
    border:2px solid red;
    border-radius:15px;
    transition: 1s all ease;
    &:hover{
        background-color:red;
        color:white;
    }
`