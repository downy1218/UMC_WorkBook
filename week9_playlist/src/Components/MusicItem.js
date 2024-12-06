import { ChevronDown,ChevronUp } from "../constants/icons";
import * as A from '../Styles/NavStyle';
// import { increase, increase } from "../redux/slice";
import {useCart} from '../redux/store'

function MusicItem({music}){
    // const dispatch = useDispatch();
    const increase = useCart((state) => state.increase);
    const decrease = useCart((state) => state.decrease);
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
                <A.IconWrapper onClick={()=>increase(music.id)}>
                    <ChevronUp />
                </A.IconWrapper>
                <p>{music.amount}</p>
                <A.IconWrapper onClick={()=>decrease(music.id)}>
                    <ChevronDown/>
                </A.IconWrapper>
            </A.MusicAmount>
        </A.Container>
    )
}

export default MusicItem;