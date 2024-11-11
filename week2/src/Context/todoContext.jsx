import { createContext,useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({children}) {

    const [todo, setTodo] = useState([
        { id: 1, task: 'reading' },
        { id: 2, task: 'eating' },
        { id: 3, task: 'game' }
    ]);
    const [text, setText] = useState(''); //사용자가 입력하는 값
    const [editing, setEditing] = useState('');
    const [editText, setEditText] = useState('');  //수정 칸에 수정되는 텍스트


    const handleSubmit = (e) => {
        e.preventDefault();
    };
    //추가하는 함수
    const addTask = () => {
        const newId = todo.length > 0 ? Math.max(...todo.map(item => item.id)) + 1 : 1
        if (text.trim() !== '') {
            setTodo((prev) => [...prev, { id: newId, task: text }])
        };
        // setTodo((prev)=>[...prev, {id:prev.id+1, task:text}]) //할 일 번호가 순서대로 출력되게함 
        setText('');
    };


    //삭제하는 함수
    const delTask = (id) => {
        setTodo((prev) => prev.filter((item) => item.id !== id))
    };

    //3.수정하는 함수
    const updateTask = (id) => {
        setTodo((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: editText } : item))
        )
        setEditing('')
    };










    return <TodoContext.Provider
            value={{
                todo, setTodo, text, setText, editing, setEditing, editText, setEditText, handleSubmit, addTask,delTask,updateTask}}>
    {children}
    </TodoContext.Provider>
}