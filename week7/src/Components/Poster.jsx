import React, { useState } from 'react';
import { MOVIES } from '../mocks/movie.js';
import './Poster.css';
import styled from 'styled-components';
import * as M from '../Styles/PosterStyle.js';
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';

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

  const CardWrapper = styled.div`
  display: flex;
  justify-content:center;
  margin-left: 120px;
  margin-top: 0
`


  return (
    <CardWrapper>
      <M.GridContainerStyle>
        {MOVIES.results.map((movie, index) => (
          <Card key={movie.id} movie={movie} index={index} />
        ))}
      </M.GridContainerStyle>
    </CardWrapper>

  );
};

export default MoviePosters;
