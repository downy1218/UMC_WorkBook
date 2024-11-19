//MovieDetail.js 파일
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card.jsx';
import styled from 'styled-components';
import * as M from '../Styles/CategoryStyle.js';
import { useQuery } from '@tanstack/react-query';
import { MovieApi } from '../Apis/MovieApis.js';
import * as S from '../Styles/SearchStyle';
import SkeletonList from '../Components/SkeletonList';
import { useInfiniteQuery } from '@tanstack/react-query';
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

  const [page,setPage] = useState(1);

  const {isPending, isLoading, data:movie} = useQuery({
    queryKey:['movies',category,page], //카테고리가 변경될때마다 새로운 데이터
    queryFn:()=>MovieApi.getCategory(category,page),
    placeholderData: (previousData) => previousData //이전 페이지의 데이터를 계속 보여줌, 새 데이터가 도착하면 자연스럽게 교체됨
  });
  console.log('movie:', movie);












  {/*useInfiniteQuery 무한스크롤 부분 */}

  // const { isError, isPending, data: movie, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
  //   queryKey: ['movies', category],
  //   queryFn: ({ pageParam = 1 }) => MovieApi.getCategory(category, pageParam),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages) => {
  //     console.log('lastPage', lastPage);
  //     console.log('allpages', allPages);
  //     if (lastPage.nextPage <= lastPage.total_pages) {
  //       return lastPage.nextPage;
  //     }
  //     else {
  //       return undefined;
  //     };

  //   }
  // })
  // console.log('movie:', movie);


  const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage()
  //   }
  // }, [fetchNextPage, inView])

  if (isLoading) {
    return (
      <S.GridContainer>
        <SkeletonList />
      </S.GridContainer>
    )
  }
  if (isPending) {
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
          {movie.results.map((movie,index) => {
              return <Card key={movie.id} movie={movie} index={index} />
          })}
        </M.GridContainerStyle1>
      </CardWrapper>
      {/* <div ref={ref} style={{width:'100%',marginTop:'50px', display:'flex',justifyContent:'center'}}>
        {isFetchingNextPage ? <ThreeDots visible={true} color="#fff"/>: null}
      </div> */}
      <M.PageBtn>
        <button onClick={()=>setPage(page => page - 1)} disabled={page === 1 ? true : false}>prev</button>
        <p>{page}/{movie?.total_pages}</p> 
        <button onClick={()=>setPage(page => page + 1)} disabled={page === movie?.total_pages }>next</button>
      </M.PageBtn>
    </>

  )
};
export default MovieDetail;