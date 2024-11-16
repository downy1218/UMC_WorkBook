//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useCustomFetch from '../Hooks/useCustomFetch.js';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card.jsx';
import styled from 'styled-components';
import * as M from '../Styles/CategoryStyle.js';


const CardWrapper = styled.div`
  display: flex;
  justify-content:center;
  margin-left: 120px;
  margin-top: 0
`
function MovieDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { isError, isLoading, data: movie } = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`)
  console.log('movie:', movie)

  if (isLoading) {
    return (
      <div style={{ color: 'white', fontSize: '20px', marginLeft: '150px' }}>
        <h1>loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div style={{ color: 'red', fontSize: '20px', marginLeft: '150px' }}>
        <h1>Error</h1>
      </div>
    )
  }


  return (
      <CardWrapper>
        <M.GridContainerStyle1>
            {movie.map((movie,index) => (
                <Card key={movie.id} movie={movie} index={index}/>
              ))}
          </M.GridContainerStyle1>
      </CardWrapper>

  )
};
export default MovieDetail;