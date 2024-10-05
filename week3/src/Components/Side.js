import { IoIosAlbums } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const SideBarStyle = styled.div`
    width:120px;
    height:100%;
    color:white;
    cursor:pointer;
    margin-top:30px
`


function SideBar(){
    const navigate = useNavigate();
    const gotoSearch = ()=>{navigate('search')};
    const gotoSearchMovie = ()=>{navigate('searchMovie')};

    return(
        <SideBarStyle >
            <p onClick={gotoSearch} style={{paddingLeft:'22px'}}><IoMdSearch style={{ marginRight: '8px' }}/>찾기</p>
            <p onClick={gotoSearchMovie} style={{paddingLeft:'22px'}}><IoIosAlbums style={{ marginRight: '8px' }}/>영화</p>
        </SideBarStyle>
    )
};
export default SideBar;