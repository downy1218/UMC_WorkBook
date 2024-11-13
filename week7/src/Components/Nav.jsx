import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as N from '../Styles/NavStyle.js';
import api from "../Apis/axios-auth.js";

function Nav() {
    const [logStatus, setLogStatus] = useState(false);
    const [userMail, setUserMail] = useState('');
    const navigate = useNavigate();

    //로그인 상태가 변할 때 정보를 가져옴
    useEffect(() => {
        const access = localStorage.getItem('accessToken'); //토큰가져옴
        if (access) {
            const response = async () => {
                try {
                    const userData = await api.get('/user/me', {
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
        else{
            setLogStatus(false);
        }
    }, []);

    const handlelogOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setLogStatus(false);
        setUserMail('');
        navigate('/')
    }


    return (
        <div>
            <Link to='/'>
                <N.NavTitle>DANCHA</N.NavTitle>
            </Link>
            

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
    )
};
export default Nav;