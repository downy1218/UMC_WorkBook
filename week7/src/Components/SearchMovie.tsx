import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../Hooks/useCustomFetch';
import Card from './Card';
import { useState, useEffect } from 'react';
import * as S from '../Styles/SearchStyle';


export const SearchMovieList = ({ mq }) => {
    const [found, setFound] = useState([]);
    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
    const { isError, isLoading, data: movies } = useCustomFetch(url);
    console.log('mq:',mq);


    useEffect(() => {
        setFound(movies);
      }, [movies]);



    return (
        <S.GridContainer>
            {found.map((movie) => {
                return (
                    <Card key={movie.id} movie={movie} />

                )
            })
            }
        </S.GridContainer>

    )
};