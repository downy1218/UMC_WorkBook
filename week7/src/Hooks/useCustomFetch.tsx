import { axiosInstance } from '../Apis/axios-instance.js';
import { useEffect, useState } from 'react';

const useCustomFetch = (url:string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        const GetMovieData = async () => {
            setIsLoading(true);
          try {
            const response = await axiosInstance.get(url)
            setData(response.data.results); //result가 아니라 results였음...
            console.log(response.data.results)
          } 
          catch (error) {
            setIsError(true);
          }
          finally{
            setIsLoading(false);
          }
        };
        GetMovieData();
        
        
    }, [url]);
    return{isError,isLoading,data}
};

export default useCustomFetch;