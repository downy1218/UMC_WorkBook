import styled from "styled-components";

export const GridContainerStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr); 
    margin-top:0px;
    gap: 30px; // 포스터 위 아래 줄 사이 간격
    padding:8px;
`

export const PosterContainer = styled.div`
    // width: 100px; 
    display: flex;
    flex-direction: column; 
    align-items: center;
`
export const PosterStyle = styled.div`
    position: relative;
    width: 100px; // 포스터 크기
    // overflow: hidden;
    border-radius: 10px;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const OverlayStyle = styled.div`
    position:absolute; //상대 위치를 기준으로 div요소가 0 0 0 0만큼 위치
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0; // display:'none->block'이랑 같은거
    transition: opacity 0.1s ease;
`

export const MovieInfo = styled.div`
    color:white;
`