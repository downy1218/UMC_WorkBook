import * as L from '../Styles/CategoryStyle';
import { useState } from 'react';
import { validateLogin } from '../Utils/validate';
import useForm from '../Hooks/useForm';
import api from '../Apis/axios-auth';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const navigate = useNavigate();
    const login = useForm({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateLogin
    });

    console.log(login.getTextInputProps('email'));

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(login.values.email,login.values.password)
        onSubmit(login.values)
    };

    const onSubmit = async(data)=>{
        try{
            const response = await api.post('/auth/login',{
                email:data.email,
                password:data.password
            });

            if(response.data.accessToken && response.data.refreshToken){
                localStorage.setItem('accessToken',response.data.accessToken);
                localStorage.setItem('refreshToken',response.data.refreshToken);
                console.log('토큰 저장 성공')

            }else{
                console.log('토큰저장실패')
            }
            navigate('/');
        }
        catch(error){
            console.log('로그인 실패');
            alert('이메일 또는 비밀번호가 잘못되었습니다')
        }
    };
    

    return(
        <L.LoginTitle>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' {...login.getTextInputProps('email')} placeholder='이메일을 입력하세요'/>
                {login.touched?.email&& login.errors?.email && <p style={{color:'red'}}>{login.errors.email}</p>}

                <input type='password'{...login.getTextInputProps('password')} placeholder='비밀번호를 입혁하세요'/>
                {login.touched?.password&& login.errors?.password && <p style={{color:'red'}}>{login.errors.password}</p>}
                <button>로그인</button>
            </form>
        </L.LoginTitle>
        
    )
}
export default LoginPage;