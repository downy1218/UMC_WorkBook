//추가된 리스트 보여주는 컴포넌트
import { remove,complete } from "../redux/todoSlice";
import {useSelector, useDispatch } from 'react-redux';

export default function TodoList(){
    const dispatch = useDispatch();
    const todolist = useSelector(state=>state.todoFunctions);
    console.log('todolist:',todolist)
    return(
        <>
            <div>
                <ul>
                    {todolist.map((item,index)=>{
                        return(
                            <div key={item.id}>
                                <input 
                                    type="checkbox"
                                    onChange={()=>{dispatch(complete(todolist[index].id))}}>
                                </input>
                                <p>{item.text}</p>
                                <div>
                                    <button onClick={()=>{dispatch(remove(todolist[index].id))}}>삭제</button>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
