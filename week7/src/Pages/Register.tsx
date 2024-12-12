import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as R from '../Styles/CategoryStyle';
import Input from '../Components/Input';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import api from '../Apis/axios-auth';
import { useMutation } from '@tanstack/react-query'

function RegisterPage() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 입력하세요'),
        password: yup.string().min(8, '최소 8글자 이상 입력하세요').max(14, '14글자까지 입력 가능합니다').required('비밀번호를 입력해주세요'),
        passwordCheck: yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다').required('비밀번호를 확인해주세요')
    });
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const SignUpMutate = async(data)=>{
        try{
            const response = await api.post('auth/register',{
                email:data.email,
                password:data.password,
                passwordCheck:data.passwordCheck
            })
            return response;
        }
        catch(error){
            console.log(error);
        }
    }



    const {mutate, isLoading,isError,Error} = useMutation({
        mutationFn: SignUpMutate,
        onSuccess:()=>{
            console.log('회원가입 성공');
            navigate('/login')
        },
        onError:()=>{
            console.log('회원가입 에러')
            alert('회원가입 실패')
        }
    })


   
    //// data는 form에서 입력받은 값들을 담고 있습니다
    const onSubmit = (data)=>{
        mutate(data)
    }


    console.log('email value:', watch('email'));
    console.log('pass value:', watch('password')); 


    return (
        <R.InputWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register('email')} type={"email"} placeholder={'이메일을 입력해주세요'} />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>

                <Input register={register('password')} type={"password"} placeholder={'비밀번호를 입력해주세요'} />
                <p style={{ color: 'red' }}>{errors.password?.message}</p>

                <Input register={register('passwordCheck')} type={"password"} placeholder={'비밀번호를 확인해주세요'} />
                <p style={{ color: 'red' }}>{errors.passwordCheck?.message}</p>

                <R.SignUpBtn type='submit'>가입하기</R.SignUpBtn>

            </form>
        </R.InputWrapper>
    )
}

export default RegisterPage;