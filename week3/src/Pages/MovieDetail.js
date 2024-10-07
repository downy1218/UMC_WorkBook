//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
function MovieDetail(){
    const { category } = useParams();
    const [movie, setMovie] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const GridContainerStyle = styled.div`
    display: grid;
    margin-top:0px;
    grid-template-columns: repeat(10, 1fr); 
    gap: 30px; // 포스터 위 아래 줄 사이 간격
    padding:8px;
    `;

  const PosterContainer = styled.div`
    // width: 100px; 
    display: flex;
    flex-direction: column; 
    align-items: center;
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


  const OverlayStyle = styled.div`
    position:absolute; //상대 위치를 기준으로 div요소가 0 0 0 0만큼 위치
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0; // display:'none->block'이랑 같은거
    transition: opacity 0.1s ease;
  `;

  const MovieInfo = styled.div`
    color:white;
  `

    useEffect(() => {
        // 카테고리에 맞는 API 호출
        const fetchMovieData = async () => {
          try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,{
                headers: {
                    Authorization: 
                    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzUxZmQ1NzczMTNmMjVmYzQ0YWIwNWRiODY5NzU4ZSIsIm5iZiI6MTcyODI0MTU2NS44NTkzNzEsInN1YiI6IjY3MDJkMGRlZTQ4MDE0OTE0Njg1YWUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4eASdIMY1xRwkrTPuzZzS7X7FmFAo8KRZ1yM9POuNHE`
                }
            })
            console.log(response.data);
            setMovie(response.data.results);
          } catch (error) {
            console.error("Error fetching movie data:", error);
          }
        };
        fetchMovieData();
        
    }, [category]);



    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '120px',
            marginTop: '0'
          }}>
            <GridContainerStyle>
              {movie.map((movie, index) => (
                <PosterContainer key={movie.id}>
                  <PosterStyle
                    title = {movie.title}
                    date = {movie.release_date}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <MovieInfo>
                      <div style={{fontSize:'15px'}}>{movie.title}</div>
                      <div style={{fontSize:'10px'}}>{movie.release_date}</div>
                    </MovieInfo>
                    <img
                      src={`${baseUrl}${movie.poster_path}`}
                      alt={movie.original_title}
                      style={{ width: '100%', height: '100%' }} // 이미지가 부모의 크기를 가득 채우도록
                    />
                    <OverlayStyle style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
                  </PosterStyle>
                </PosterContainer>
              ))}
          </GridContainerStyle>
          </div >
    )
};
export default MovieDetail;