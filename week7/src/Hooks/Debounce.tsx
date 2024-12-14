import { useState,useEffect } from "react";

const useDebounce = (value:string,delay:number)=>{
    const[debounced,setDebounced] = useState(value);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounced(value)
        },delay)

        //value가 다시 변경되면 이전 타이머를 취소
        return ()=>{
            clearTimeout(timer)
        }
    },[value])
    return debounced;
}

export default useDebounce;