import { useParams } from "react-router-dom";
import './App.css';
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './Context/todoContext.jsx';
import Input from "./Components/Input.jsx";
import { todoApi } from "./Api/todoApis.jsx";
import {SyncLoader} from 'react-spinners';


function DetailPage() {
    const [todoDetail,setTodoDetail] = useState(null); //null로 설정:데이터를 아직 불러오지않은 상태
    const navigate = useNavigate();
    const { todoId } = useParams();//url에서 가져온것
    console.log("todoId:", todoId)

    const { todo,
        editing, setEditing,
        editText, setEditText,
        editBody, setEditBody,
        delTask, updateTask
    } = useContext(TodoContext);

    const currentTodo = todo.find(item => item.id === parseInt(todoId)); //params로 불러온 아이디와 같은 투두 찾기
    // console.log(currentTodo.id)

    const handleDelete = () => {
        delTask(currentTodo.id)
        navigate('/')
    }

    const handleUpdate = ()=>{
        updateTask(currentTodo.id)
        if(editText===''&&editBody===''){
            alert('제목과 내용을 입력해주세요')
        }else{
            alert("수정이 완료됐습니다!")
        }
    };

    //개별 투두리스트 조회
    useEffect(()=>{
        const fetchEachTodo = async()=>{
            try{
                //각 todoId 별로 가져오기
                const data = await todoApi.getTodoById(todoId);
                console.log('data:',data)
                //가져온 상태로 상태 업데이트
                setTodoDetail(data);
            }
            catch(error){
                console.log(`${todoId}데이터조회실패:`,error)
            }
        };
        fetchEachTodo();
    },[todoId])



    if(!todoDetail){
        <>
            <SyncLoader color="blue"/>
            <p>로딩 중..</p>
        </>
    }

    return (
        <>
            {editing !== currentTodo.id && (
                <div className="datail-container">
                    <div className="taskTitleWrapper">
                        <h2>해야 할 일</h2>
                        <h2>{currentTodo ? currentTodo.task : "제목을 불러올 수 없습니다"}</h2>
                    </div>
                    <div className="taskBodyWrapper">
                        <h2>내용</h2>
                        <h2>{currentTodo ? currentTodo.taskBody : "내용을 불러올 수 없습니다"}</h2>
                    </div>
                </div>)}


            {editing === currentTodo.id && (
                <div className='editingInputWrapper'>
                    <input
                        className='editingInput'
                        type="text"
                        defaultValue={currentTodo.task}
                        onChange={(e) => setEditText(e.target.value)} />
                    <input
                        className='editingInput'
                        type="text"
                        defaultValue={currentTodo.taskBody}
                        onChange={(e) => setEditBody(e.target.value)} />
                </div>
            )}

            {
                editing === currentTodo.id ?
                    <button onClick={handleUpdate}>수정완료</button>
                    :
                    <button onClick={() => setEditing(currentTodo.id)}>수정하기</button>
            }
            <button className="detailDelete" onClick={handleDelete}>삭제</button>



            <button className="back-to-main" onClick={() => { navigate('/') }}>메인으로 돌아가기</button>
        </>
    )
}
export default DetailPage;