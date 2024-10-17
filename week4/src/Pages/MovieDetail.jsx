//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as M from '../Styles/CategoryStyle.js';
import { axiosInstance } from '../Apis/axios-instance.js';
import useCustomFetch from '../Hooks/useCustomFetch.js';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

function MovieDetail(){
    const { category,movie_id } = useParams();
    // const [movie, setMovie] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const gotoInfo = ()=>{navigate(`/movie/:${category}/:${movie_id}`)};

    const {isError,isLoading,movie} = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`)

    if(isLoading){
      return(
      <div style={{color:'white',fontSize:'20px', marginLeft:'150px'}}>
        <h1>loading...</h1>
      </div>
      )
    }
    if(isError){
      return(
      <div style={{color:'red',fontSize:'20px', marginLeft:'150px'}}>
        <h1>Error</h1>
      </div>
      )
    }


    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '120px',
            marginTop: '0'
          }}>
            <div style={{transform:'translateY(-70px) translateX(+40px)'}}>
              <TiArrowBack style={{color:'white',fontSize:'32px',cursor:'pointer'}} onClick={()=>navigate('/category')}/>
            </div>
            <M.GridContainerStyle1>
              {movie.map((movie, index) => (
                <M.PosterContainer1 key={movie.id}>
                  <M.PosterStyle1
                    title = {movie.title}
                    date = {movie.release_date}
                    overview={movie.overview}
                    movieID={movie.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={()=>gotoInfo()}
                  >
                    
                    <img
                      src={`${baseUrl}${movie.poster_path}`}
                      alt={movie.original_title}
                      style={{ width: '100px', height: '150px', objectFit : 'cover', aspectRatio: '3/4', marginBottom: '10px', borderRadius: '10px'}} // 이미지가 부모의 크기를 가득 채우도록
                    />
                    <M.MovieInfo1>
                      <div style={{fontSize:'15px'}}>{movie.title}</div>
                      <div style={{fontSize:'10px'}}>{movie.release_date}</div>
                    </M.MovieInfo1>
                    <M.OverlayStyle1 style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
                  </M.PosterStyle1>
                </M.PosterContainer1>
              ))}
          </M.GridContainerStyle1>
        </div >
    )
};
export default MovieDetail;