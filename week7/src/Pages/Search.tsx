import { useState, useEffect } from 'react';
import * as S from '../Styles/SearchStyle';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../Hooks/useCustomFetch';
import Card from '../Components/Card';
import { SearchMovieList } from '../Components/SearchMovie';
import styled from 'styled-components';
import Skeleton from '../Components/Skeleton';
import SkeletonList from '../Components/SkeletonList';
import useDebounce from '../Hooks/Debounce';
import { JSX } from 'react';

const NoMovie = styled.div`
    display:flex;
    justify-content:center;
    h1{
        color:white;
    }
`
function SearchPage() {
    const [query, setQuery] = useState(''); //사용자가 입력하는 값
    const [found, setFound] = useState([]); //검색해서 나온 값들
    const [searchTerm, setSearchTerm] = useState(false); 
    const navigate = useNavigate();
    const url = `/search/movie?query=${searchTerm}&include_adult=false&language=ko-KR&page=1`;
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    });
    const mq = searchParams.get('mq');
    console.log('mq:', mq);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };


    const handleSearch = () => {
        if (mq === query) return; //같을 경우 함수를 종료
        navigate(`/search?mq=${query}`);
        console.log('클릭됨');
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const { isError, isLoading, data: movies } = useCustomFetch(url);
    console.log('검색한 영화 정보들:', movies);


    const debounce = useDebounce(query,5000);
    
    useEffect(()=>{
        if(debounce){
            setSearchTerm(debounce);
            navigate(`/search?mq=${debounce}`)
        }
    },[debounce])


    return (
        <>
            <S.Container>
                <S.SearchInput
                    placeholder='검색어를 입력하세요..'
                    type='search'
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
                <span><S.SearchBtn onClick={() => handleSearch()}>검색</S.SearchBtn></span>
            </S.Container>
            {isLoading ? 
                (
                    <S.GridContainer>
                        <SkeletonList/>
                    </S.GridContainer>
                ) 
            
            : (
                <>
                    {(movies?.length === 0) && (mq) ?
                        (
                            <NoMovie><h1>영화 정보가 없습니다 철자 또는 띄어쓰기를 확인하세요.</h1></NoMovie>
                        )
                        : 
                        (
                            <SearchMovieList mq={mq} />
                        )
                    }
                </>
            )}


        </>


    )
}
export default SearchPage;