import Nav from "../Components/Nav.js";
import {Outlet} from "react-router-dom";
import SideBar from "../Components/Side.js";
import Poster from '../Components/Poster.js';

const RootLayout = () => {
    return (
        <>
            <Nav/>
            <SideBar/>
            <Poster />
            <Outlet/>
        </>
    );
};

export default RootLayout;