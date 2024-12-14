import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../Hooks/useCustomFetch';
import Card from './Card';
import { useState, useEffect } from 'react';
import * as S from '../Styles/SearchStyle';
import {JSX} from 'react';


interface Movie{
    id:string;
    poster_path: string;
    original_title: string;
    title: string;
    release_date: string;
    vote_average: number;
}

interface MqProps{
    mq:string;
}
export const SearchMovieList = ({ mq }:MqProps):JSX.Element => {
    const [found, setFound] = useState<Movie[]>([]); // found 상태를 Movie[] 타입으로 설정
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
                    <Card key={movie.id} movie={movie} index={found.indexOf(movie)}/>//found 배열에서 movie가 처음으로 나타나는 인덱스 값을 반환

                )
            })
            }
        </S.GridContainer>

    )
};