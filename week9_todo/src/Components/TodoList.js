//추가된 리스트 보여주는 컴포넌트
import { remove, complete } from "../redux/todoSlice";
import { useSelector, useDispatch } from 'react-redux';
import './InputTodo.css';


export default function TodoList() {
    const dispatch = useDispatch();
    const todolist = useSelector(state => state.todoFunctions);
    console.log('todolist:', todolist)
    return (
        <>
            <div className="ListWrapper">
                <ul>
                    {todolist.map((item, index) => {
                        return (
                            <div key={item.id} className="ListShow">
                                <input
                                    id="checkBox"
                                    type="checkbox"
                                    onChange={() => { dispatch(complete(todolist[index].id)) }}>
                                </input>

                                <p id="todoListText" style={todolist[index].complete === true ?
                                    { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                                    {item.text}
                                </p>

                                <div className="delBtnContainer">
                                    <button
                                        className="delBtn"
                                        onClick={() => { dispatch(remove(todolist[index].id)) }}>삭제</button>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
