import { axiosInstance } from '../Apis/axios-instance.js';
import { useEffect, useState } from 'react';

const useCustomFetch = (url) => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        const GetMovieData = async () => {
            setIsLoading(true);
          try {
            const response = await axiosInstance.get(url)
            setMovie(response.data.results);
          } 
          catch (error) {
            setIsError(true);
          }
          finally{
            setIsLoading(false);
          }
        };
        GetMovieData(movie);
        
    }, [url]);
    return{isError,isLoading,movie}
};

export default useCustomFetch;