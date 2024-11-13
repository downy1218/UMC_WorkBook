import { useState,useEffect } from 'react';
import * as S from '../Styles/SearchStyle';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../Hooks/useCustomFetch';
import MovieDetail from './MovieDetail';

function SearchPage() {
    const[query,setQuery] = useState(''); //사용자가 입력하는 값
    const[found,setFound] = useState([]); //검색해서 나온 값들
    const[searching,setSearching] = useState(false); //검색중인지아닌지
    const[loading,setLoading] = useState(false); //로딩 상태
    const navigate = useNavigate();
    const url = `/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1`;

    const [searchParams,setSearchParams] = useSearchParams({
        mq:''
    });
    const mq = searchParams.get('mq');
    console.log('mq:',mq);

    const handleChange = (event)=>{
        setQuery(event.target.value)
    };


    const handleSearch = ()=>{
        if(mq===query)return; //같을 경우 함수를 종료
        navigate(`/search?mq=${query}`);
        console.log('클릭됨');
        
    };
    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            handleSearch();
        }
    };

    console.log('입력하는 값:',query);

    const {isError, isLoading, data:movies} = useCustomFetch(url);
    console.log(movies);





    return (
        <>
            <S.Container>
                <S.SearchInput 
                placeholder='검색어를 입력하세요..'
                type='search'
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/>
                <span><S.SearchBtn onClick={()=>handleSearch()}>검색</S.SearchBtn></span>
            </S.Container>

            <S.GridContainer>
                {movies.map((movies)=>{
                    <MovieDetail key={movies.id} movies={movies}></MovieDetail>
                })}
            </S.GridContainer>
        </>


    )
}
export default SearchPage;