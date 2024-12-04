import { CartIcon } from "../constants/icons";
import * as N from '../Styles/NavStyle';


function Nav(){
    return(
        <N.NavContainer>
            <h1>UMC Play List</h1>
            <N.CartIcon>
                <CartIcon/>
            </N.CartIcon>
        </N.NavContainer>
    )
}

export default Nav;