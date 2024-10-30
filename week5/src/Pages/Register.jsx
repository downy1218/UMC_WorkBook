import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as R from '../Styles/CategoryStyle';

function RegisterPage(){
    const schema = yup.object().shape({
        이메일 :yup.string().email().required('이메일을 입력해주세요'),
        비밀번호: yup.string().min(8, '최소 8글자 이상입력하세요').max(14,'최대 14글자까지 가능합니다').required('비밀번호를 입력헤주세요')
    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data)=>{
        console.log('폼제출')
        console.log(data)
    };



    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'email'}{...register('email')}/>
            <p style={{color: 'red'}}>{errors.이메일?.message}</p>
            <input type={'password'}{...register('password')}/>
            <p style={{color: 'red'}}>{errors.비밀번호?.message}</p>
            <input type={'submit'}/>
        </form>
    )
}
export default RegisterPage;