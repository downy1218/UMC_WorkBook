import cartItems from "../constants/cartItems";
import { ChevronDown,ChevronUp } from "../constants/icons";
import * as A from '../Styles/NavStyle';
import { useDispatch } from "react-redux";
import { increase, decrease } from "../redux/slice";


function MusicItem({music}){
    const dispatch = useDispatch();
    return(
        <A.Container>
            <A.Album>
                <img src={music.img}></img>
            </A.Album>

            <A.MusicInfo>
                <h2>{music.title} | {music.singer}</h2>
                <p>{music.price} won</p>
            </A.MusicInfo>

            <A.MusicAmount>
                <A.IconWrapper onClick={()=>dispatch(increase(music.id))}>
                    <ChevronUp />
                </A.IconWrapper>
                <p>{music.amount}</p>
                <A.IconWrapper onClick={()=>dispatch(decrease(music.id))}>
                    <ChevronDown/>
                </A.IconWrapper>
            </A.MusicAmount>
        </A.Container>
    )
}

export default MusicItem;