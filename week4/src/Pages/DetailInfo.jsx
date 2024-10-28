import { useParams } from 'react-router-dom';
import * as D from '../Styles/PosterStyle.js';
import React from 'react';
import useCustomInfo from '../Hooks/useCustomInfo.js';
import { TiArrowBack } from "react-icons/ti";


function DetailInfo() {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
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
        <div style={{ transform: 'translateY(-70px) translateX(+40px)' }}>
          <TiArrowBack style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }} onClick={() => navigate(`/movie/${category}`)} />
        </div>
        <div style={{ color: 'white' }}>
          <img
            src={`${baseUrl}${movieDetail?.backdrop_path}`}
          />
        </div>
        <D.OverView>
          <h1>{movieDetail?.title}</h1>
          <h4>평균 {movieDetail?.vote_average}점</h4>
          <h4>{movieDetail?.runtime}분</h4>
          <h4>{movieDetail?.tagline || null}</h4>
          <h4>{movieDetail?.overview || null}</h4>
        </D.OverView>
      </div>

      <div style={{ paddingTop: '50px' }}>
        <h1>감독</h1>
        <div>
          {director && (
            <div>
              <img
                src={`${baseUrl}${director?.profile_path}`}
              />
              <p>{director?.name}</p>
            </div>
          )}
        </div>
      </div>


      <div style={{ paddingTop: '50px' }}>
        <h1>출연</h1>
        <div>
          {castData&&(
            castData.map((actor)=>{
              return(
                <div key={actor.cast_id}>
                  <img
                    src={`${baseUrl}${actor?.profile_path}`}
                    alt='배우 사진 없음'
                  />
                  <p>캐릭터 : {actor.character}</p>
                  <p>배우 : {actor.original_name}</p>
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