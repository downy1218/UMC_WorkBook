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
    gap:50px;
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