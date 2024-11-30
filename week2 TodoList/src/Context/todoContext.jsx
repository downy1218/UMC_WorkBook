import { createContext, useEffect, useState } from "react";
import { todoApi } from "../Api/todoApis";
import { Navigate } from "react-router-dom";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {

    // const [todo, setTodo] = useState([
    //     { id: 1, title: 'reading', content: '어린왕자 책읽기' },
    //     { id: 2, title: 'eating', content: '피자' },
    //     { id: 3, title: 'game', content: '놀동숲' }
    // ]);
    const [todo,setTodo] = useState([]);
    const [text, setText] = useState(''); //사용자가 입력하는 값(제목)
    const [secText, setSecText] = useState(''); //사용자가 입력하는 값(내용)
    const [editing, setEditing] = useState(''); //수정 중인 id
    const [editText, setEditText] = useState('');  //수정 칸에 수정되는 제목
    const [editBody, setEditBody] = useState('')//수정되는 내용

    const handleSubmit = (e) => {
        e.preventDefault();
    };






    //todo 추가하는 함수 

    const addTask = async () => {
        try {
            const myTodo = {
                title: text,
                content: secText
            };
            if (text.trim() !== '') {
                const response = await todoApi.createTodo(myTodo);

                setTodo(prev => {
                    console.log('prev:', prev);
                    return Array.isArray(prev) ? [...prev, response] : [response]
                });
                setText('');
                setSecText('');
            }
        }
        catch (error) {
            console.log('추가 실패:', error)
        }
    };



    //삭제하는 함수
    const delTask = async (id) => {
        try {
            await todoApi.deleteTodo(id)
            setTodo((prev) => prev.filter((item) => item.id !== id))
        }
        catch(error){
            console.log('삭제실패:', error)
        }
    };




    //수정완료 하는 함수
    const updateTask = async (id) => {
        try {
            const myTodo = {
                title: editText,
                content: editBody
            };
            const response = await todoApi.updateTodo(id, myTodo);
            console.log('res:',response)
            setTodo((prev) =>
                prev.map(item => item.id === id ? { ...item, title:editText, content:editBody} : item)
            );
            // 상태 초기화
            setEditText('');
            setEditBody('')
            setEditing('');

        }
        catch (error) {
            console.log('수정실패:', error)
        }
    }










    return <TodoContext.Provider
        value={{
            editBody, setEditBody, secText, setSecText,
            todo, setTodo, text, setText, editing, setEditing,
            editText, setEditText, handleSubmit, addTask, delTask, updateTask
        }}>
        {children}
    </TodoContext.Provider>
}