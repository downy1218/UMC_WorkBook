import { useParams } from 'react-router-dom';
import * as D from '../Styles/PosterStyle.js';
import React from 'react';
import{useState} from 'react';
import useCustomInfo from '../Hooks/useCustomInfo.js';


function DetailInfo(){
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const {movie_id} = useParams();
     
    const {isError,isLoading,credit} = useCustomInfo(`/movie/${movie_id}/credits?language=ko-KR&page=1`)

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

    console.log(movie_id)
    console.log(credit)
    return(
        <D.Credit>
            <div>
                <h1>dd</h1>
                <h3>평균 평점:</h3>
                <D.OverView></D.OverView>
            </div>
            <div style={{paddingTop:'50px'}}>
                <h1>감독/출연</h1>
                <D.ActorPhoto>
                    <img src='' alt='배우 프로필'></img> {/*근데 이거 영화마다 캐릭터개수 다른디 length로 해야되나?*/}
                </D.ActorPhoto>
            </div>
        </D.Credit>
    )
}
export default DetailInfo;