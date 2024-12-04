import cartItems from "../constants/cartItems";
import { ChevronDown } from "../constants/icons";
import { ChevronUp } from "../constants/icons";
import * as A from '../Styles/NavStyle';

function MusicItem({music}){
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
                <ChevronUp/>
                <p>{music.amount}</p>
                <ChevronDown/>
            </A.MusicAmount>
        </A.Container>
    )
}

export default MusicItem;