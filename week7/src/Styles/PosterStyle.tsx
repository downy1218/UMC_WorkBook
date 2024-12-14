import styled from "styled-components";

export const GridContainerStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr); 
    margin-top:0px;
    gap: 30px; // 포스터 위 아래 줄 사이 간격
    padding:8px;
`
export const NewGridContainerStyle = styled.div`
    display: flex;
    margin-top:0px;
    gap: 30px; // 포스터 위 아래 줄 사이 간격
    padding:8px;
`

export const PosterContainer = styled.div`
    // width: 100px; 
    display: flex;
    flex-direction: column; 
    // align-items: center;
`
export const PosterStyle = styled.div`
    position: relative;
    width: 100%; // 포스터 크기
    //overflow: hidden;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const OverlayStyle = styled.div`
    position:absolute; 
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

//------영화 크레딧 정보------------------------------------------------------------------

export const Credit = styled.div`
    color:white;
    margin-left:150px;
    margin-top: 0px
`
export const OverView = styled.div`
    p{
        margin-top:70px;
        font-style:italic;
        font-size:40px;
        width:1200px;

    }
    h3{
        font-size: 20px;
        color:grey;
        width:1200px;
        line-height:50px;
        margin-top:70px;
    }

`
export const Backdrop = styled.div`
    border-radius: 40px;
    overflow: hidden;
    max-width:1200px;
    height:500px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit : cover;
        aspect-ratio: 2/1;
        opacity:0.5;
    }
`


export const DirectorInfo = styled.div`
    width:120px;
    height:150px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        // margin-bottom: 10px;
        // margin-top:10px;
        // padding:8px;
        gap:5px;
    }
    p{
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
    }
`


export const SmallInfo = styled.div`
    display: flex;
    gap: 150px;
    position: absolute;
    bottom:-40px;
    left:180px;
    left:
    z-index:1;
    
    p{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:50px;
        margin-top:12px;
        color:rgba(150, 246, 255, 1);
    }
    h3{
        display:flex;
        justify-content:center;
        align-items:center;

    }
`

export const Titles = styled.div`
    margin-top:5px;

    p{
        font-size:15px;
        color:grey;
        margin-top:0;
    }
`
export const TitlesContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-right:150px;

    button{
        background-color:#7DCBD2;
        color:white;
        width:200px;
        height:40px;
        border:none;
        border-radius:10px;
        cursor:pointer;
    }
`
//프로필사진과 이름을 하나로 묶은 덩어리
export const ImgContainer = styled.div`
    img{
        width:120px;
        height:150px;
        object-fit:cover;
    }
`
export const Review = styled.div`
    width:50px;
    height:50px;
    display:flex;
`
interface ReviewProfileProps {
    src: string;
}
export const ReviewProfile = styled.img<ReviewProfileProps>`
    width:100%;
    height:100%;
    border-radius:100%;
    border:2px solid white;
    object-fit:cover;
`