import { CartIcon } from "../constants/icons";
import * as N from '../Styles/NavStyle';
// import { useSelector } from "react-redux";
import {useCart} from '../redux/store';

function Nav(){
    // const {totalNum} = useSelector(state=>state.musicFunctions)
    const totalNum = useCart((state)=> state.totalNum)
    
    return(
        <N.NavContainer>
            <h1>UMC Play List</h1>
            <N.CartIcon>
                <CartIcon/>
                <div style={{marginLeft:'10px'}}>
                    <p>{totalNum}</p>
                </div>
            </N.CartIcon>
        </N.NavContainer>
    )
}

export default Nav;