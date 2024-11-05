import styled from "styled-components";


export const GridContainerStyle1 = styled.div`
display: grid;
margin-top:0px;
grid-template-columns: repeat(10, 1fr); 
gap: 30px; // 포스터 위 아래 줄 사이 간격
padding:8px;
`;

export const PosterContainer1 = styled.div`
// width: 100px; 
display: flex;
flex-direction: column; 
align-items: center;
`;
export const PosterStyle1 = styled.div`
position: relative;
width: 100px; // 포스터 크기
// height: 180px;
overflow: hidden;
display: felx;
justify-content:center;
align-items: center;
`;


export const OverlayStyle1 = styled.div`
position:absolute; //상대 위치를 기준으로 div요소가 0 0 0 0만큼 위치
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
opacity: 0; // display:'none->block'이랑 같은거
transition: opacity 0.1s ease;
`;

export const MovieInfo1 = styled.div`
color:white;
`
//=====로그인 페이지==========================================================================

export const LoginTitle = styled.div`
    h1{
        color:white;
        display:flex;
        justify-content:center;
        font-weight:bold;
        font-size:25px;

    }
    form{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:15px;
    }
    input,button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:500px;
        height:50px;
        border-radius:10px;
        padding-left:9px;
      
    }
    button{
        font-size:15px;
        font-weight:bold;
        color:white;
        background-color:rgb(255, 71, 71);
        cursor:pointer;
        width:520px;
        height:55px;
        transition:background-color 0.8s;
    }
    button:hover{
        background-color:white;
        color:rgb(255, 71, 71);
    }
`