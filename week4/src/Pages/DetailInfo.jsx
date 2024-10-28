import { useParams } from 'react-router-dom';
import * as D from '../Styles/PosterStyle.js';
import React from 'react';
import useCustomInfo from '../Hooks/useCustomInfo.js';
import { IoTicket } from "react-icons/io5";


function DetailInfo() {
  const baseUrl = 'https://image.tmdb.org/t/p/original'; //이미지크기 돌려줘야함(화질저하방지)
  const { movie_id, category } = useParams();

  const { credit: movieCredit, isError: creditError, isLoading: creditLoading } = useCustomInfo(`/movie/${movie_id}/credits?language=ko-KR&page=1`)// credits 데이터를 위한 훅
  const { credit: movieDetail, isError: datailError, isLoading: detailLoading } = useCustomInfo(`/movie/${movie_id}?language=ko-KR&page=1`)   // 영화 상세 정보를 위한 훅
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

        <D.Titles>
          <h1>{movieDetail?.title}</h1>
          <p>{movieDetail?.original_title}</p>
        </D.Titles>

        <D.OverView>
          <p>{movieDetail?.tagline || null}</p>
          <h3>{movieDetail?.overview || null}</h3>
        </D.OverView>
      </div>

      <div style={{ paddingTop: '150px' }}>
        <h1>감독</h1>
        <div>
          {director && (
            <div>
              <D.ActorPhoto>
                <img
                  src={`${baseUrl}${director?.profile_path}`}
                />
                <p>{director?.name}</p>
              </D.ActorPhoto>
            </div>
          )}
        </div>
      </div>

      
      <div style={{ paddingTop: '150px' }}>
        <h1>출연</h1>
        <div>
          {castData&&(
            castData.slice(0,8).map((actor)=>{
              return(
                <div key={actor.cast_id} style={{display:'flex'}}>
                  <D.ActorPhoto>
                    <img
                      src={`${baseUrl}${actor?.profile_path}`}
                      alt='배우 사진 없음'
                    />
                    <p>캐릭터 : {actor.character}</p>
                    <p>배우 : {actor.original_name}</p>
                  </D.ActorPhoto>
                </div>
              )
            })
          )}
        </div>
      </div>
    </D.Credit>
  )
}
export default DetailInfo;