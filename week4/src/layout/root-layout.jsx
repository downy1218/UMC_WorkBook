import Nav from "../Components/Nav.jsx";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/Side.jsx";


const RootLayout = () => {
    return (
        <>
            <Nav/>
            <SideBar/>
            <div style={{paddingLeft:'20px',paddingTop:'0px'}}>
                <Outlet/>
            </div>
            
            {/* <Outlet/> 아울렛 부분에 따로 css속성 줘서 사이드바랑 네브바 구별할 수 있음*/} 
        </>
    );
};

export default RootLayout;