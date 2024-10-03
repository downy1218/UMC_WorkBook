import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';

const MoviePosters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)', // 1줄에 10개씩 배치
    gap: '10px', // 포스터 위 아래 줄 사이 간격
    padding: '8px',
  };

  const posterStyle = {
    position: 'relative',
    width: '100px', // 포스터 크기
    height: '180px',
    overflow: 'hidden',
    borderRadius: '10px',
    display: 'felx',
    justifyContent: 'center',
    alignItems: 'center'

  };

  const overlayStyle = {
    position: 'absolute', //상대 위치를 기준으로 div요소가 0 0 0 0만큼 위치
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    opacity: 0, // display:'none->block'이랑 같은거
    transition: 'opacity 0.1s ease'
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', // 수평 중앙 정렬
      alignItems: 'center', // 수직 중앙 정렬 (필요시)
      }}>
      <div style={gridContainerStyle}>
        {MOVIES.results.map((movie, index) => (
          <div
            key={movie.id}
            style={posterStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.original_title}
              style={{ width: '100%', height: '100%' }} // 이미지가 부모의 크기를 가득 채우도록
            />
            <div
              style={{
                ...overlayStyle,
                opacity: hoveredIndex === index ? 1 : 0
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePosters;
