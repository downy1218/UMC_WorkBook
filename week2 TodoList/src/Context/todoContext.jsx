import { createContext,useEffect,useState } from "react";
import { todoApi } from "../Api/todoApis";

export const TodoContext = createContext();

export function TodoContextProvider({children}) {

    const [todo, setTodo] = useState([
        { id: 1, task: 'reading',taskBody:'어린왕자 책읽기' },
        { id: 2, task: 'eating',taskBody:'피자' },
        { id: 3, task: 'game',taskBody:'놀동숲' }
    ]);
    const [text, setText] = useState(''); //사용자가 입력하는 값(제목)
    const [secText, setSecText] = useState(''); //사용자가 입력하는 값(내용)
    const [editing, setEditing] = useState(''); //수정 중인 id
    const [editText, setEditText] = useState('');  //수정 칸에 수정되는 제목
    const [editBody,setEditBody] = useState('')//수정되는 내용

    const handleSubmit = (e) => {
        e.preventDefault();
    };




    //초기 모든 투두리스트 데이터 불러오기
    useEffect(()=>{
        const fetchAllTodo = async()=>{
            try{
                const data = await todoApi.getAllTodos();
                setTodo(data) //모든데이터집어넣기
            }
            catch(error){
                console.log('모든데이터조회실패:',error)
            }
        };
        fetchAllTodo();
    },[])




    //todo 추가하는 함수 

    const addTask = async() => {
        try{
            const myTodo = {
                task:text,
                taskBody:secText
            };
            if(text.trim() !== ''){
                const data = await todoApi.createTodo(myTodo);
                const newId = todo.length > 0 ? Math.max(...todo.map(item => item.id)) + 1 : 1;
                setTodo((prev) => [...prev, data]);
                setText('');
                setSecText('');
            }
        }
        catch(error){
            console.log('추가 실패:',error)
        }     
    };      



    //삭제하는 함수
    const delTask = async(id) => {
        try{
            await todoApi.deleteTodo(id) 
            setTodo((prev) => prev.filter((item) => item.id !== id))
        }
        catch(error){
            console.log('삭제실패:',error)
        }
    };




    //수정완료 하는 함수
    const updateTask = async(id) => {
        try{
            const updated = {
                task:editText,
                taskBody:editBody
            };
            setTodo((prev) =>
                prev.map((item) => (item.id === id ? {task:editText,taskBody:editBody}: item))
            );
            setEditing('');
        }
        catch(error){
            console.log('수정실패:',error)
        }
    }










    return <TodoContext.Provider
            value={{
                editBody,setEditBody,secText, setSecText, 
                todo, setTodo, text, setText, editing, setEditing, 
                editText, setEditText, handleSubmit, addTask,delTask,updateTask}}>
    {children}
    </TodoContext.Provider>
}