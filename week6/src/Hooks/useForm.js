import { useEffect, useState } from "react";


function useForm({initialValues,validate}){
    const[values,setValues] = useState(initialValues);
    const[touched,setTouched] = useState({}); //객체로 초기화
    const[errors,setErrors] = useState({});

    //(email,value)=>{[email]:value} 대괄호 안 name을 변수 취급하게됨
    const handleChangeInput = (name,value)=>{
        setValues({
            ...values,
            [name]:value
        })
    };
    const handleBlur = (name)=>{
        setTouched({
            ...touched,
            [name]:true
        })
    };
    const getTextInputProps = (name)=>{
        const value = values[name];
        const onChange = (event)=>handleChangeInput(name,event.target.value);
        const onBlur = ()=>handleBlur(name);
        
        return{value,onChange,onBlur}
    };
    
    useEffect(()=>{
        const newErrors = validate(values);
        setErrors(newErrors);
    },[validate,values]);


    return{values,touched,errors,getTextInputProps}
};



export default useForm;