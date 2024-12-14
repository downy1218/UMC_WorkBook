import * as L from '../Styles/CategoryStyle';
import { FormEvent, useState } from 'react';
import { validateLogin } from '../Utils/validate';
import useForm from '../Hooks/useForm';
import api from '../Apis/axios-auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { JSX } from 'react';


interface LoginData{
    email:string;
    password:string;
}

function LoginPage():JSX.Element{
    const navigate = useNavigate();
    const login = useForm({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateLogin
    });

    console.log(login.getTextInputProps('email'));

    //FormEvent는 form 제출과 관련된 모든 이벤트 속성과 메서드를 포함합니다.
    //preventDefault()와 같은 메서드를 타입 안전하게 사용할 수 있습니다
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(login.values.email,login.values.password)
        onSubmit(login.values)
    };



    const LoginMutate = async(data:LoginData)=>{
        try{
            const response = await api.post('/auth/login',{
                email:data.email,
                password:data.password
            });
            if(response.data.accessToken && response.data.refreshToken){
                localStorage.setItem('accessToken',response.data.accessToken);
                localStorage.setItem('refreshToken',response.data.refreshToken);
                console.log('토큰 저장 성공')
                console.log(response.data.accessToken)

            }else{
                console.log('토큰저장실패')
            }
            return response;
        }
        catch(error){
            throw error
        }
    };
    
    
    const {mutate} = useMutation({
        mutationFn:LoginMutate,
        onSuccess:()=>{
            console.log('로그인 성공')
            navigate('/');
            window.location.reload(); //로그인 후 페이지 새로고침 안해도 reload해줌
        },
        onError:()=>{
            console.log('로그인 실패')
           
        }
    });






    const onSubmit =(data:LoginData)=>{
        mutate(data)
    }
    

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