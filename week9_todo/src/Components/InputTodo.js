//할 일을 추가하는 form

import './InputTodo.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import { add } from '../redux/todoSlice';


export default function InputTodo() {
    const dispatch = useDispatch();
    const [todoList, setTodoList] = useState({
        id: 0,
        text: ''
    });
    const handleText = (e) => {
        setTodoList({ text: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoList.text.trim() !== '') {
            dispatch(add(todoList.text))
        } else {
            alert('할 일을 입력해주세요!')
        }
        setTodoList({ text: '' })
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className='SubmitTodoWrapper'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            id='SubmitInput'
                            type='text'
                            placeholder='할 일을 입력해주세요'
                            onChange={handleText}
                            value={todoList.text}>
                        </input>
                        <button type='submit' className='SubmitBtn'>+</button>
                    </div>
                </form>
                <TodoList />
            </div>
        </div>
    )
}