import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="nav-body">
            <nav>
                <Link to='/'><button id='nav-title'>YONGCHA</button></Link>
                <div className='nav-btn'>
                    <Link to = 'login'><button id='nav-btn1'>로그인</button></Link>
                    <Link to = 'register'><button id='nav-btn2'>회원가입</button></Link>
                </div>
            </nav>
        </div>
    )
};
export default Nav;