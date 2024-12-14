import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as N from '../Styles/NavStyle';
import api from "../Apis/axios-auth";
import {JSX} from 'react';

function Nav():JSX.Element {
    const [logStatus, setLogStatus] = useState<boolean>(false);
    const [userMail, setUserMail] = useState<string>('');
    const navigate = useNavigate();
    const gotoMain = ()=>{navigate('/')}; //TypeScript가 navigate 함수의 타입을 자동 추론(타입지정 불필요)

    //api.get 요청의 응답 데이터를 안전하게 다루기 위해 인터페이스나 타입을 정의
    interface UserData{
        email:string;
    }

    //로그인 상태가 변할 때 정보를 가져옴
    useEffect(() => {
        const access = localStorage.getItem('accessToken'); //토큰가져옴
        //access가 null이 아닌 경우
        if (access) {
            const response = async () => {
                try {
                    const userData = await api.get<UserData>('/user/me', {
                        headers: {
                            Authorization: `Bearer ${access}`
                        }
                    });
                    
                    setLogStatus(true);
                    console.log('로그인 상태:',logStatus);
                    const userMail = userData.data.email.split('@')[0];
                    setUserMail(userMail);
                } catch(error){
                    console.error('정보 가져오기 실패',error)
                }
            };
            response(); //함수 호출을 해야함
        }
        //null인 경우
        else{
            setLogStatus(false);
        }
    }, [logStatus]);

    const handlelogOut = ():void => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setLogStatus(false);
        setUserMail('');
        navigate('/')
    }


    return (
        <div>
            <div>
                <N.NavTitle onClick={gotoMain}>
                    <p style={{fontSize:'40px'}}>D</p>
                    <p style={{fontSize:'38px'}}>A</p>
                    <p style={{fontSize:'36px'}}>N</p>
                    <p style={{fontSize:'36px'}}>C</p>
                    <p style={{fontSize:'38px'}}>H</p>
                    <p style={{fontSize:'40px'}}>A</p>
                </N.NavTitle>

                { logStatus?
                    <N.NavBtn>
                        <span>{userMail}님 환영합니다!</span>
                        <N.NavBtn2 onClick={() => handlelogOut()}>로그아웃</N.NavBtn2>
                    </N.NavBtn>
                    :
                    <N.NavBtn>
                        <Link to='login'><N.NavBtn1>로그인</N.NavBtn1></Link>
                        <Link to='register'><N.NavBtn2>회원가입</N.NavBtn2></Link>
                    </N.NavBtn>
                }

            </div>
        </div>
    )
};
export default Nav;