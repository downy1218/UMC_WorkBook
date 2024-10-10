import { IoIosAlbums } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import * as S from '../Styles/NavStyle';


function SideBar(){
    const navigate = useNavigate();
    const gotoSearch = ()=>{navigate('search')};
    const gotoSearchMovie = ()=>{navigate('searchMovie')};

    return(
        <S.SideBarStyle >
            <p onClick={gotoSearch} style={{paddingLeft:'22px'}}><IoMdSearch style={{ marginRight: '8px' }}/>찾기</p>
            <p onClick={gotoSearchMovie} style={{paddingLeft:'22px'}}><IoIosAlbums style={{ marginRight: '8px' }}/>영화</p>
        </S.SideBarStyle>
    )
};
export default SideBar;