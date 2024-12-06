import * as D from '../Styles/ModalStyle';
// import { useDispatch } from 'react-redux';
import { allClear } from '../redux/slice';
import {close} from '../redux/modalSlice';
import { useCart,useModal } from '../redux/store.js';


function Modal({isOpen}){
    // const dispatch = useDispatch();

    const close = useModal((state)=> state.close);
    const allClear = useCart((state)=> state.allClear);
    const handleShutDown = ()=>{
        allClear();
        close();
    }
    return(
        <D.Container  style={{display: isOpen ? 'block' : 'none',zIndex:50}}>
            <D.Modal>
                <div>
                    <D.Modaldetail>
                        <h2>장바구니를 초기화 하시겠습니까?😥</h2>
                    </D.Modaldetail>
                    <hr/>
                    <D.Answer>
                        <D.Yes onClick={()=>handleShutDown()}>네</D.Yes>
                        <D.No onClick={()=>close()}>좀만 더 생각해볼게요</D.No>
                    </D.Answer>

                </div>
            </D.Modal>
        </D.Container>
    )
}

export default Modal;