import './App.css';
import React, { useContext, useState,useEffect } from 'react';
import Input from './Components/Input.jsx';
import Button from './Components/Button.jsx';
import { TodoContext } from './Context/todoContext.jsx';
import { useNavigate } from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { createContext} from "react";
import { todoApi } from "./Api/todoApis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery,useMutation} from '@tanstack/react-query';


function App() {
  
  const navigate = useNavigate();
  const gotoDetail = (todoId)=> {console.log("Moving to detail with id:", todoId); navigate(`/todoDetail/${todoId}`)};

  const {
    editBody,
    setEditBody, 
    secText,
    setSecText,
    todo,
    setTodo,
    text,
    setText,
    editing,
    setEditing,
    editText,
    setEditText,
    handleSubmit,
    addTask,
    delTask,
    updateTask
  } = useContext(TodoContext);


    const {data, isLoading,isError} = useQuery({
      queryKey:['fetchingAllTodos'],
      queryFn:todoApi.getAllTodos
    });
    console.log(data)

    useEffect(()=>{
      if(data){
        setTodo(data)
      }
    },[])

  //   //초기 모든 투두리스트 데이터 불러오기
  //   useEffect(()=>{
  //     const fetchAllTodo = async()=>{
  //         try{
  //             const rawData = await todoApi.getAllTodos();
  //             console.log(rawData)

  //             if(Array.isArray(rawData)){
  //                 setTodo(rawData); //모든데이터집어넣기
  //                 console.log('todo:',todo);
  //             }
  //         }
  //         catch(error){
  //             console.log('모든데이터조회실패:',error)
  //         }
  //     };
  //     fetchAllTodo();
  // },[])

  return (
    <>
      <h1 className='title'>UMC TO-DO-List 🎄</h1>
      <form onSubmit={handleSubmit} className='formWrapper'>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <Input
          type="text"
          value={secText}
          onChange={(e) => setSecText(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <Button type='submit' onClick={() => addTask()} label='할 일 등록' />
      </form>

      <div className="taskMenu">
        {todo && Array.isArray(todo)&&todo.map((a, index) => {
          return (
            <div key={a.id} >
              {editing !== a.id && (
                <div onClick={()=>gotoDetail(a.id)}>
                  <p>{index + 1}.</p>
                  <p>{a.title}</p>
                  <p>{a.content}</p>
                </div>
              )}
              {editing === a.id && (
                <div className='editingInputWrapper'>
                  <p>{index + 1}.</p>
                  <input
                    className='editingInput'
                    type="text"
                    defaultValue={a.title}
                    onChange={(e) => setEditText(e.target.value)} />
                  <input
                  className='editingInput'
                    type="text"
                    defaultValue={a.content}
                    onChange={(e) => setEditBody(e.target.value)} />
                </div>
              )}

              <Button label='삭제' onClick={() => delTask(a.id)} />

              {editing === a.id ? <Button label='수정완료' onClick={() => updateTask(a.id)} />
                : <Button label='수정하기' onClick={() => setEditing(a.id)} />}
            </div>
          )
        })}
      </div>

      </>
  )
}

export default App;
