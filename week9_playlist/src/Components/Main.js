import * as B from '../Styles/NavStyle';
import MusicItem from './MusicItem';
import cartItems from "../constants/cartItems";
import { useDispatch } from 'react-redux';
import { allClear } from '../redux/slice';
import { useSelector } from 'react-redux';

function Main(){
    const dispatch = useDispatch();
    const { cartItems,totalPrice} = useSelector(state=>state.musicFunctions);
    return(
        <div>
            <B.Title>
                <h1>당신이 선택한 음반</h1>
            </B.Title>

            <div>
                {cartItems && cartItems.map((music,index)=>{
                    return(
                        <div>
                            <MusicItem key={music.id} music={music}/>
                        </div>
                    )
                })}   
                <hr/>
                <B.TotalPrice>
                    <p>총 가격 : </p>
                    <h2>{totalPrice}</h2>
                </B.TotalPrice>

                <B.MainBottom>
                    <B.AcBtn onClick={()=>dispatch(allClear())}>장바구니 초기화</B.AcBtn>
                </B.MainBottom>
            </div>
 
        </div>
    )
}

export default Main;