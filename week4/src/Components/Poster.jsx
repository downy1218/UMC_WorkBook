import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';
import styled from 'styled-components';
import * as P from '../Styles/PosterStyle.js';

const MoviePosters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';



  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '120px',
      marginTop: '0'
    }}>
      <P.GridContainerStyle>
        {MOVIES.results.map((movie, index) => (
          <P.PosterContainer key={movie.id}>
            <P.PosterStyle
              title = {movie.title}
              date = {movie.release_date}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.original_title}
                style={{ width: '120px', height: '150px' }} // 이미지가 부모의 크기를 가득 채우도록
              />
              <P.MovieInfo>
                <div style={{fontSize:'15px'}}>{movie.title}</div>
                <div style={{fontSize:'10px'}}>{movie.release_date}</div>
              </P.MovieInfo>
              
              <P.OverlayStyle style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
            </P.PosterStyle>
          </P.PosterContainer>
        ))}
    </P.GridContainerStyle>
    </div >
  );
};

export default MoviePosters;
