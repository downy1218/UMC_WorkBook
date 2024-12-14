import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';
import styled from 'styled-components';
import * as M from '../Styles/PosterStyle.js';
import { useNavigate } from 'react-router-dom';
import Card from './Card.js';
import { useQuery } from '@tanstack/react-query';
import { MovieApi } from '../Apis/MovieApis.js';
import QandA from './QandA.js';
import {JSX} from 'react';


interface Movie{
  id:string;
  poster_path: string;
  original_title: string;
  title: string;
  release_date: string;
  vote_average: number;
}
// interface MovieData {
//   results: Movie[];
// }
const MoviePosters = ():JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);
  const navigate = useNavigate();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const [page,setPage] = useState<number>(1);
  
  //React Query에서 데이터의 타입을 명시
  const {isPending, isError, data:movie} = useQuery<Movie[]>({
    queryKey:['movies',page], 
    queryFn:()=>MovieApi.getHotNow(page),
    placeholderData: (previousData) => previousData //이전 페이지의 데이터를 계속 보여줌, 새 데이터가 도착하면 자연스럽게 교체됨
  });

  console.log('movie',movie)


  const CardWrapper = styled.div`
  display: flex;
  justify-content:center;
  margin-left: 120px;
  margin-top: 0;
`
  const CardWrapper2 = styled.div`
  display: flex;
  justify-content:center;
  margin-right:30px;
  margin-left: 50px;
  margin-top: 0;
`
  const MainMessage = styled.div`
    color:rgba(195, 195, 195, 1);
    display:flex;
    justify-content:start;
    margin-left:120px;

  `
  const Btn = styled.div`
    width:20px;
    height:70px;
    background-color:rgba(63, 63, 63, 0.81);
    cursor:pointer;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    margin-top:60px;
    &:hover{
      opacity:0.7;
    }
  `
  const Big = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  color:white;
  margin-bottom:30px;
  
    h2{
      font-size:50px;
      font-weight:bold;
      margin-bottom: 10px; 
    }
    h3{
      font-size:20px;
    }
  `
  return (
    <>
      <Big>
        <h2>영화, 시리즈 등을 무제한으로</h2>
        <h3>월 4,500원으로 시작하세요 언제든지 해지 가능합니다</h3>
      </Big>

      <MainMessage>
        <h1>지금 뜨는 컨텐츠</h1>
      </MainMessage>
      <CardWrapper2>
        <M.NewGridContainerStyle>
          <Btn onClick={()=>setPage(page=>page -1)} style={{opacity: page !== 1 ? 1 : 0 }}> ⟨ </Btn>
          {movie?.slice(1,6).map((movie,index) => {
              return <Card key={movie.id} movie={movie} index={index}/>
          })}
          <Btn onClick={()=>setPage(page=>page +1)} style={{display:page === 2 ? 'none':'block'}}> ⟩ </Btn>
        </M.NewGridContainerStyle>
      </CardWrapper2>


      <MainMessage>
        <h1>지금 구독하면 볼 수 있는 컨텐츠</h1>
      </MainMessage>
      <CardWrapper>
        <M.GridContainerStyle>
          {MOVIES.results.slice(1,10).map((movie, index) => (
            <Card key={movie.id} movie={movie} index={index} />
          ))}
        </M.GridContainerStyle>
      </CardWrapper>


      <MainMessage>
        <h1>선물하기 좋은 컨텐츠</h1>
      </MainMessage>
      <CardWrapper>
        <M.GridContainerStyle>
          {MOVIES.results.slice(11,21).map((movie, index) => (
            <Card key={movie.id} movie={movie} index={index} />
          ))}
        </M.GridContainerStyle>
      </CardWrapper>

      <MainMessage>
        <h1>자주 묻는 질문</h1>
      </MainMessage>
      <QandA/>

    </>

  );
};

export default MoviePosters;
