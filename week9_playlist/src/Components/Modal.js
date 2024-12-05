import * as D from '../Styles/ModalStyle';
import { useDispatch } from 'react-redux';
import { allClear } from '../redux/slice';
import {close} from '../redux/modalSlice'
function Modal({isOpen}){

    const dispatch = useDispatch();
    const handleShutDown = ()=>{
        dispatch(allClear());
        dispatch(close())
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
                        <D.No onClick={()=>dispatch(close())}>좀만 더 생각해볼게요</D.No>
                    </D.Answer>

                </div>
            </D.Modal>
        </D.Container>
    )
}

export default Modal;