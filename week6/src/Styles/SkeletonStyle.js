import { keyframes } from "styled-components";
import styled from "styled-components";


const Animation = keyframes`
    0%{
        opacity:1
    }
    30%{
        opacity:0.2
    }
    50%{
        opacity:0.5
    }
    80%{
        opacity:0.8
    }
    100%{
        opacity:1
    }
`

export const Skeleton = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:50px;

`
export const SkeletonPoster = styled.div`
width:100px;
height:150px;
background-color:grey;
border-radius:10px;
animation: ${Animation} 2s 1s infinite linear alternate;

`
export const TitleBox = styled.div`
display:flex;
flex-direction:column;
width:100px;
margin-top:10px;

`

export const Title = styled.div`
margin-bottom:10px;
width:100px;
height:20px;
background-color:grey;
border-radius:10px;
animation: ${Animation} 2s 1s infinite linear alternate;
`

export const Date = styled.div`
width:100px;
height:20px;
background-color:grey;
border-radius:10px;
animation: ${Animation} 2s 1s infinite linear alternate;
`