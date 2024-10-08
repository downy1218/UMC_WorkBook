import Nav from "../Components/Nav.js";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/Side.js";


const RootLayout = () => {
    return (
        <>
            <Nav/>
            <SideBar/><Outlet/>
            
            {/* <Outlet/> 아울렛 부분에 따로 css속성 줘서 사이드바랑 네브바 구별할 수 있음*/} 
        </>
    );
};

export default RootLayout;