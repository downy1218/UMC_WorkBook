//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCustomFetch from '../Hooks/useCustomFetch.js';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card.jsx';
import styled from 'styled-components';
import * as M from '../Styles/CategoryStyle.js';
import { useQuery } from '@tanstack/react-query';
import { MovieApi } from '../Apis/MovieApis.js';
import * as S from '../Styles/SearchStyle';
import SkeletonList from '../Components/SkeletonList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { all } from 'axios';
import { useInView } from 'react-intersection-observer';
import { ThreeDots } from 'react-loader-spinner';


const CardWrapper = styled.div`
  display: flex;
  justify-content:center;
  margin-left: 120px;
  margin-top: 0
`
function MovieDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  // const { isError, isLoading, data: movie } = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`);


  // const {isError, isLoading, data:movie} = useQuery({
  //   queryKey:['movies',category], //카테고리가 변경될때마다 새로운 데이터
  //   queryFn:()=>MovieApi.getCategory(category)
  // });
  // console.log('movie:', movie);

  const { isError, isPending, data: movie, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['movies', category],
    queryFn: ({ pageParam = 1 }) => MovieApi.getCategory(category, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log('lastPage', lastPage);
      console.log('allpages', allPages);
      if (lastPage.nextPage <= lastPage.total_pages) {
        return lastPage.nextPage;
      }
      else {
        return undefined;
      };

    }
  })
  console.log('movie:', movie);


  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  if (isPending) {
    return (
      <S.GridContainer>
        <SkeletonList />
      </S.GridContainer>
    )
  }
  if (isError) {
    return (
      <div style={{ color: 'red', fontSize: '20px', marginLeft: '150px' }}>
        <h1>Error</h1>
      </div>
    )
  }


  return (
    <>
      <CardWrapper>
        <M.GridContainerStyle1>
          {movie?.pages.map((page) => {
            return page.results.map((movie, index) => {
              return <Card key={movie.id} movie={movie} index={index} />
            })
          })}
        </M.GridContainerStyle1>
      </CardWrapper>
      <div ref={ref} style={{width:'100%',marginTop:'50px', display:'flex',justifyContent:'center'}}>
        {isFetchingNextPage ? <ThreeDots visible={true} color="#fff"/>: null}
      </div>
    </>

  )
};
export default MovieDetail;