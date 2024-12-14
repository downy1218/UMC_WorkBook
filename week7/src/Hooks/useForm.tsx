import { useEffect, useState } from "react";


interface InitialProps{
    email:string;
    password:string;
}

interface FormProps{
    initialValues:InitialProps;
    validate:(values:InitialProps)=>InitialProps
}

interface Errors {
    email?: string;
    password?: string;
}
  
  interface Touched {
    email?: boolean; //값이 있을 때는 그 값이 boolean 타입이어야 한다, 없을 수도 있다는 뜻
    password?: boolean;
}



function useForm({initialValues,validate}:FormProps){
    const[values,setValues] = useState<InitialProps>(initialValues);
    const[touched,setTouched] = useState<Touched>({}); //객체로 초기화
    const[errors,setErrors] = useState<Errors>({});

    //(email,value)=>{[email]:value} 대괄호 안 name을 변수 취급하게됨
    const handleChangeInput = (name: keyof InitialProps, value: string):void => {
        setValues({
            ...values,
            [name]:value
        })
    };
    //keyOf 연산자사용=> email과 password만 받을 수 있도록함 (특정 객체의 키들만 허용하는 제한된 타입 지정해줌)
    const handleBlur = (name: keyof InitialProps):void => {
        setTouched({
            ...touched,
            [name]:true
        })
    };
    const getTextInputProps = (name: keyof InitialProps)=>{
        const value = values[name];
        const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>handleChangeInput(name,event.target.value);
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