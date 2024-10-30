import * as L from '../Styles/CategoryStyle';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';


function LoginPage(){
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 입력하세요'),
        password: yup.string().min(8,'최소 8글자 이상 입력하세요').max(14,'14글자까지 입력 가능합니다').required('비밀번호를 입력해주세요')
    });
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data)=>{
        console.log(data)
    };
    // const [disabled,setDisabled] = useState(false);
    // const Disabled = ()=>{
    //     if
    //     setDisabled(true)
    // };

    return(
        <L.LoginTitle>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'email'}{...register('email')} placeholder='이메일을 입력하세요'/>
                <p style={{color:'red'}}>{errors.email?.message}</p>
                <input type={'password'}{...register('password')}placeholder='비밀번호를 입혁하세요'/>
                <p style={{color:'red'}}>{errors.password?.message}</p>
                <button type='submit'>로그인</button>
            </form>
        </L.LoginTitle>
        
    )
}
export default LoginPage;