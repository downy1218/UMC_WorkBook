//영화 포스터 낱개 하나 
import * as M from '../Styles/CategoryStyle.js';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const MovieImg = styled.img`
width:100px;
height: 150px;
object-fit : cover;
aspect-ratio: 3/4;
margin-bottom: 10px;
border-radius: 10px;
`
const MovieImgHover = styled.div`
    transition: transform 0.8s ease;
    &:hover{
    transform:scale(1.2);
}
`
const HoverInfo = styled.div`
    margin-left:5px;
    color:white;
    font-size:15px;
    display:flex;
    flex-direction:column;
    gap:3px;
    overflow:hidden;
    font-weight:bold;
    p{
        margin-left:5px;
        margin-bottom:2px;
        font-size:10px;
    }
    h4{
        margin-left:5px;
        margin-bottom:0px;
        font-size:12px;
    }
`
function Card({ movie, index }) {
    const navigate = useNavigate();
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const gotoInfo = (movie_id) => { navigate(`/movie/detail/${movie_id}`), console.log('눌림') };

    return (
        <div movie={movie} index={index} style={{position:'relative'}}>
            <MovieImgHover
                
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => gotoInfo(movie.id)}
                >
                <MovieImg src={`${baseUrl}${movie.poster_path}`} alt={movie.original_title} />

                <M.OverlayStyle1 style={{ opacity: hoveredIndex === index ? 1 : 0 }}>
                    <HoverInfo>
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <p>평균 ★ {movie.vote_average.toFixed(1)}</p>
                    </HoverInfo>
                </M.OverlayStyle1>

                <M.MovieInfo1>
                    <div>{movie.title}</div>
                    <p>{movie.release_date}</p>
                </M.MovieInfo1>
            </MovieImgHover>
        </div>
    )
}
export default Card;