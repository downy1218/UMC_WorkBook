import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';
import styled from 'styled-components';
import * as P from '../Styles/PosterStyle.js';
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-left:120px;
  margin-top:0;
`
const MoviePosters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';



  return (
    
    <Container>
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
                style={{ width: '100px', height: '150px', objectFit : 'cover', aspectRatio: '3/4', marginBottom: '10px', borderRadius: '10px' }} // 이미지가 부모의 크기를 가득 채우도록
              />
              
              <P.OverlayStyle style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
            </P.PosterStyle>

              <P.MovieInfo>
                <div style={{fontSize:'15px'}}>{movie.title}</div>
                <div style={{fontSize:'10px'}}>{movie.release_date}</div>
              </P.MovieInfo>

          </P.PosterContainer>
        ))}
    </P.GridContainerStyle>
    </Container >
  );
};

export default MoviePosters;
