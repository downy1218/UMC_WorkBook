import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as R from '../Styles/CategoryStyle';
import Input from '../Components/Input';

function RegisterPage(){
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 입력하세요'),
        password: yup.string().min(8,'최소 8글자 이상 입력하세요').max(14,'14글자까지 입력 가능합니다').required('비밀번호를 입력해주세요'),
        passwordCheck:yup.string().oneOf([yup.ref('password')],'비밀번호가 일치하지 않습니다').required('비밀번호를 확인해주세요')
    });
    const {register, handleSubmit, watch,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data)=>{
        // e.preventDefault();
        console.log('data:',data)
    };
    console.log('email value:', watch('email')); //값 실시간 확인
    return(
        <R.LoginTitle>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'email'}{...register('email')} placeholder='이메일을 입력하세요' />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>

                <input type={'password'}{...register('password')} placeholder='비밀번호를 입력하세요' />
                <p style={{ color: 'red' }}>{errors.password?.message}</p>

                <input type={'password'}{...register('passwordCheck')} placeholder='비밀번호를 확인해주세요' />
                <p style={{ color: 'red' }}>{errors.passwordCheck?.message}</p>

                <button type='submit'>회원가입</button>
            </form>
        </R.LoginTitle>
    )
}
export default RegisterPage;