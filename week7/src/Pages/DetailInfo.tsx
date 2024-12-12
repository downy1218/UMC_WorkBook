import { useParams } from 'react-router-dom';
import * as D from '../Styles/PosterStyle.js';
import React, { useState } from 'react';
import useCustomInfo from '../Hooks/useCustomInfo.js';
import { IoTicket } from "react-icons/io5";
import { useQuery } from '@tanstack/react-query';
import { MovieApi } from '../Apis/MovieApis.js';


function DetailInfo() {
  const baseUrl = 'https://image.tmdb.org/t/p/original'; //이미지크기 돌려줘야함(화질저하방지)
  const { movie_id, category } = useParams();

  const [star,setStar] = useState('⭐');
  const { data: movieCredit, isError: creditError, isLoading: creditLoading } = useQuery({
    queryKey:['credit',movie_id],
    queryFn:()=>MovieApi.getCredit(movie_id)
  });
  
  const { data: movieDetail, isError: datailError, isLoading: detailLoading } = useQuery({
    queryKey:['movieDetail',movie_id],
    queryFn:()=>MovieApi.getDetail(movie_id)
  });
  const { data: movieReview, isError: ReviewError, isLoading: ReviewLoading } = useQuery({
    queryKey:['movieReviews',movie_id],
    queryFn:()=>MovieApi.getReview(movie_id)
  });
  
  

  console.log('movieCredit:',movieCredit);
  console.log('movieDetail:',movieDetail);
  const castData = movieCredit?.cast;
  const crewData = movieCredit?.crew;
  const director = movieCredit?.crew?.find(crew => crew.job === 'Director'); //감독정보 따로 확인


  if (creditLoading || detailLoading) {
    return (
      <div style={{ color: 'white', fontSize: '20px', marginLeft: '150px' }}>
        <h1>loading...</h1>
      </div>
    )
  }
  if (creditError || datailError) {
    return (
      <div style={{ color: 'red', fontSize: '13px', marginLeft: '150px' }}>
        <h1>영화 데이터를 불러올 수 없습니다</h1>
      </div>
    )
  }

  console.log('movieID:', movie_id)
  console.log('detailData:', movieDetail?.adult)
  console.log('크레딧 정보:', movieCredit)
  console.log('캐스트 정보:', castData)
  console.log('크루 정보:', crewData)
  console.log('감독정보:', director)


  return (
    <D.Credit>
      <div>
        <D.Backdrop>
          <img
            src={`${baseUrl}${movieDetail?.backdrop_path}`}
          />
        </D.Backdrop>

        <D.SmallInfo>
          <div>
            <h3>관람 평점</h3>
            <p><IoTicket style={{marginRight:'10px'}}/>{movieDetail?.vote_average.toFixed(1)}</p> 
          </div>
          <div>
            <h3>소요시간</h3>
            <p>{movieDetail?.runtime}분</p>
          </div>
        </D.SmallInfo>

        <D.TitlesContainer>
          <D.Titles>
            <h1>{movieDetail?.title}</h1>
            <p>{movieDetail?.original_title}</p>
          </D.Titles>
          {/* <button>예매하기</button> */}
        </D.TitlesContainer>

        <D.OverView>
          <p>{movieDetail?.tagline || null}</p>
          <h3>{movieDetail?.overview || null}</h3>
        </D.OverView>
      </div>

      <div style={{ paddingTop: '150px' }}>
        <h1>감독</h1>
        <div>
          {director && (
              <D.DirectorInfo>
                <img
                  src={`${baseUrl}${director?.profile_path}`}
                />
                <p>{director?.name}</p>
              </D.DirectorInfo>
          
          )}
        </div>
      </div>


      <div style={{marginTop:'150px'}}>
        <h1>출연</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)'}}>
          {castData&&(
            castData.slice(0,10).map((actor)=>{
              return(
                <D.ImgContainer key={actor.cast_id}>
                  <img
                  src={`${baseUrl}${actor?.profile_path}`}
                  alt='배우 사진 없음'>
                  </img>
                  <p>{actor.character}</p>
                  <p style={{color:'grey'}}>{actor.original_name}</p>
                </D.ImgContainer>
              )
            })
          )}
        </div>
      </div>

      <hr/>

      <div>
        <h2>reviews</h2>
        <div style={{color:'white',marginTop:'50px'}}>
          {movieReview?.slice(1,9).map((review,index)=>{
            const starRating = parseInt(review.author_details.rating)
            return(
              <div key={review.id}>
                <D.Review>
                  <D.ReviewProfile src={review.author_details.avatar_path ? `${baseUrl}${review.author_details.avatar_path}` : ''}></D.ReviewProfile>
                </D.Review>
                <p>{star.repeat(starRating)}</p>
                <h2>{review.author_details.name ? review.author_details.name :'No Name' } : </h2>
                <p>{review?.content}</p>
                <hr/>
              </div>
            )
          })}
          
        </div>
      </div>
    </D.Credit>
  )
}
export default DetailInfo;