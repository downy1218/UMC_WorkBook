import './App.css';
import React, { useState } from 'react';
import Input from './Components/Input.jsx';
import Button from './Components/Button.jsx';

function App() {

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

  const addTask = () => {
    const newId = todo.length > 0 ? Math.max(...todo.map(item => item.id)) + 1 : 1
    if (text.trim() !== '') {
      setTodo((prev) => [...prev, { id: newId, task: text }])
    };
    // setTodo((prev)=>[...prev, {id:prev.id+1, task:text}]) //할 일 번호가 순서대로 출력되게함 
    setText('');
  };



  const delTask = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id))
  };

  //수정하는 함수
  const updateTask = (id) => {
    setTodo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: editText } : item))
    )
    setEditing('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' onClick={() => addTask()} label='할 일 등록' />
      </form>
      <div>
        {todo.map((a, index) => {
          console.log(a)
          return (
            <div key={a.id} style={{ display: 'flex', gap: '20px' }} >
              {editing !== a.id && (
                <div>
                  <p>{index + 1}.</p>
                  <p>{a.task}</p>
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
