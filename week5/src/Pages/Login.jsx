import * as L from '../Styles/CategoryStyle';
import { useState } from 'react';
import { validateLogin } from '../Utils/validate';
import useForm from '../Hooks/useForm';

function LoginPage(){
    const login = useForm({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateLogin
    });

    console.log(login.getTextInputProps('email'));

    return(
        <L.LoginTitle>
            <h1>로그인</h1>
            <form>
                <input type='email' {...login.getTextInputProps('email')} placeholder='이메일을 입력하세요'/>
                {login.touched?.email&& login.errors?.email && <p style={{color:'red'}}>{login.errors.email}</p>}

                <input type='password'{...login.getTextInputProps('password')} placeholder='비밀번호를 입혁하세요'/>
                {login.touched?.password&& login.errors?.password && <p style={{color:'red'}}>{login.errors.password}</p>}
                <button type='submit'>로그인</button>
            </form>
        </L.LoginTitle>
        
    )
}
export default LoginPage;