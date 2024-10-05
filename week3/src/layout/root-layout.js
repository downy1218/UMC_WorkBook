import Nav from "../Components/Nav.js";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/Side.js";


const RootLayout = () => {
    return (
        <>
            <Nav/>
            <SideBar/><Outlet/>
            
            {/* <Outlet/> */}
        </>
    );
};

export default RootLayout;