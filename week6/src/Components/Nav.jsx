import React from "react";
import { Link } from "react-router-dom";
import * as N from '../Styles/NavStyle.js';

function Nav() {
    return (
        <div>
            <Link to='/'>
                <N.NavTitle>DANCHA</N.NavTitle>
            </Link>
            <N.NavBtn>
                <Link to='login'><N.NavBtn1>로그인</N.NavBtn1></Link>
                <Link to='register'><N.NavBtn2>회원가입</N.NavBtn2></Link>
            </N.NavBtn>

        </div>
    )
};
export default Nav;