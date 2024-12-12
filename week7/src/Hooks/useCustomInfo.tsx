import { axiosInstance } from '../Apis/axios-instance.js';
import { useEffect, useState } from 'react';

const useCustomInfo = (url) => {
    const [credit, setCredit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        const GetMovieData = async () => {
            setIsLoading(true);
          try {
            const response = await axiosInstance.get(url)
            setCredit(response.data);
            console.log(response.data)
            console.log('credit:',response.data.cast)
            console.log('cast:',response.data.crew)
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
    return{credit,isError,isLoading}
};

export default useCustomInfo;