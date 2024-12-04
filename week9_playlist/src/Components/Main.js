import * as B from '../Styles/NavStyle';
import MusicItem from './MusicItem';
import cartItems from "../constants/cartItems";

function Main(){
    return(
        <div>
            <B.Title>
                <h1>당신이 선택한 음반</h1>
            </B.Title>

            <div>
                {cartItems.map((music,index)=>{
                    return(
                        <div>
                            <MusicItem key={music.id} music={music}/>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Main;