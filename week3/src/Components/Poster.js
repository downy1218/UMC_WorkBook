import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';
import styled from 'styled-components';

const MoviePosters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const GridContainerStyle = styled.div`
    display: grid;
    margin-top:150px;
    grid-template-columns: repeat(10, 1fr); 
    gap: 10px; // 포스터 위 아래 줄 사이 간격
    padding:8px
    `;
    

  const PosterStyle = styled.div`
    position: relative;
    width: 100px; // 포스터 크기
    height: 180px;
    overflow: hidden;
    border-radius: 10px;
    display: felx;
    justify-content:center;
    align-items: center;
  `;
 

  const OverlayStyle =styled.div`
    position:absolute; //상대 위치를 기준으로 div요소가 0 0 0 0만큼 위치
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0; // display:'none->block'이랑 같은거
    transition: opacity 0.1s ease;
  `;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', // 수평 중앙 정렬
      }}>
      <GridContainerStyle>
        {MOVIES.results.map((movie, index) => (
          <PosterStyle
            key={movie.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.original_title}
              style={{ width: '100%', height: '100%' }} // 이미지가 부모의 크기를 가득 채우도록
            />
            <OverlayStyle style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
          </PosterStyle>
        ))}
      </GridContainerStyle>
    </div>
  );
};

export default MoviePosters;
