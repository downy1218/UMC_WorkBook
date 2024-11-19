import { axiosInstance } from "./axios-instance";

export const MovieApi = {
    getCategory: (category,page)=> 
        axiosInstance.get(`/movie/${category}?language=ko-KR&page=${page}`)
    .then(response=>{
        return{
            results: response.data.results,
            total_pages:response.data.total_pages
            // nextPage: pageParam + 1,
        }}
    ),

    getCredit:(movie_id)=>
        axiosInstance.get(`/movie/${movie_id}/credits?language=ko-KR&page=1`)
    .then(response=>{
        console.log('Credit API Response:', response.data);
        return response.data
    }),

    getDetail:(movie_id)=>
        axiosInstance.get(`/movie/${movie_id}?language=ko-KR&page=1`)
    .then(response=>{
        console.log('Detail API Response:', response.data);
        return response.data
    })
}