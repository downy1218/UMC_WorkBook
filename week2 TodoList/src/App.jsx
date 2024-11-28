import './App.css';
import React, { useContext, useState } from 'react';
import Input from './Components/Input.jsx';
import Button from './Components/Button.jsx';
import { TodoContext } from './Context/todoContext.jsx';
import { useNavigate } from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from "react-router-dom";



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
        {todo.map((a, index) => {
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
