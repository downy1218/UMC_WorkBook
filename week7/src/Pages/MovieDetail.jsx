//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import * as M from '../Styles/CategoryStyle.js';
import useCustomFetch from '../Hooks/useCustomFetch.js';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

function MovieDetail(){
    const { category } = useParams();
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const {isError, isLoading, data:movie} = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`)
    const gotoInfo = (movie_id) => {navigate(`/movie/detail/${movie_id}`),console.log('눌림')};
    console.log('movie:',movie)

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
              {movie.map((movieItem, index) => (
                <M.PosterContainer1 key={movieItem.id} movie={movie}>
                  <M.PosterStyle1
                    title = {movieItem.title}
                    date = {movieItem.release_date}
                    overview={movieItem.overview}
                    movie_id={movieItem.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={()=>gotoInfo(movieItem.id)}
                    
                  >
                    
                    <img
                      src={`${baseUrl}${movieItem.poster_path}`}
                      alt={movie.original_title}
                      style={{ width: '100px', height: '150px', objectFit : 'cover', aspectRatio: '3/4', marginBottom: '10px', borderRadius: '10px'}} 
                    />
                    <M.OverlayStyle1 style={{ opacity: hoveredIndex === index ? 1 : 0 }}/>
                    <M.MovieInfo1>
                      <div style={{fontSize:'15px',color:'white'}}>{movieItem.title}</div>
                      <div style={{fontSize:'10px'}}>{movieItem.release_date}</div>
                    </M.MovieInfo1>
                  </M.PosterStyle1>
                </M.PosterContainer1>
              ))}
          </M.GridContainerStyle1>
        </div >
    )
};
export default MovieDetail;