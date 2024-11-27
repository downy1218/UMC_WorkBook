import './App.css';
import React, { useContext, useState } from 'react';
import Input from './Components/Input.jsx';
import Button from './Components/Button.jsx';
import { TodoContext } from './Context/todoContext.jsx';

function App() {

  const { 
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
      <form onSubmit={handleSubmit} className='taskForm'>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="text"
          value={secText}
          onChange={(e) => setSecText(e.target.value)}
        />
        <Button type='submit' onClick={() => addTask()} label='할 일 등록' />
      </form>

      <div>
        {todo.map((a, index) => {
          console.log(a)
          return (
            <div key={a.id} className="taskMenu" style={{ display: 'flex', gap: '20px' }} >
              {editing !== a.id && (
                <div>
                  <p>{index + 1}.</p>
                  <p>{a.task}</p>
                  <p>{a.taskBody}</p>
                </div>
              )}
              {editing === a.id && (
                <div>
                  <p>{index + 1}.</p>
                  <input
                    type="text"
                    defaultValue={a.task}
                    onChange={(e) => setEditText(e.target.value)} />
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

export default App
