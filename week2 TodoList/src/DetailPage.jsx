import { useParams } from "react-router-dom";
import './App.css';
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './Context/todoContext.jsx';
import Input from "./Components/Input.jsx";
import { todoApi } from "./Api/todoApis.jsx";
import { SyncLoader } from 'react-spinners';
import { useQuery,useMutation} from '@tanstack/react-query';

function DetailPage() {
    const [todoDetail, setTodoDetail] = useState([]); //null로 설정:데이터를 아직 불러오지않은 상태
    const navigate = useNavigate();
    const { todoId } = useParams();//url에서 가져온것
    console.log("todoId:", todoId) // 문자열로출력

    const { todo,setTodo,
        editing, setEditing,
        editText, setEditText,
        editBody, setEditBody,
        delTask, updateTask
    } = useContext(TodoContext);

    const currentTodo = todo.find(item => item.id === parseInt(todoId)); //params로 불러온 아이디와 같은 투두 찾기(숫자)
    console.log('currentTodo.id:',currentTodo.id) //숫자로 나옴


    const {mutate} = useMutation({
        mutationFn: (id)=>todoApi.deleteTodo(id),
        onSuccess: ()=>navigate('/'),
        onError:console.log('삭제실패')
    })
    const {mutate:updateMutate} = useMutation({
        mutationFn: (id)=>todoApi.updateTodo(id),
        onSuccess: console.log('수정이 완료되었습니다'),
        onError:console.log('업뎃실패')
    })

    const handleDelete = (id)=>{
        mutate(id)
    }

    const handleUpdate = (id)=>{
        updateMutate(id)
    }

    //개별 투두리스트 조회
    useEffect(() => {
        if (!todoId || !todo) {
            console.log('no todoId')
            console.log('todo:', todo)
            return;
        }
        const fetchEachTodo = async () => {
            try {
                if (todoId && todo) {
                    //각 todoId 별로 가져오기
                    const data = await todoApi.getTodoById(todoId);
                    console.log('아이디별로 가져온data:', data)
                    //가져온 상태로 상태 업데이트
                    setTodoDetail(data);
                }
            }
            catch (error) {
                console.log(`${todoId}데이터조회실패:`, error)
            }
        };
        fetchEachTodo();
    }, [todoId,todo])



    if (!currentTodo) {
        <>
            <SyncLoader color="blue" />
            <p>로딩 중..</p>
        </>
    }

    return (
        <>
            {editing !== currentTodo.id && (
                <div className="datail-container">
                    <div className="taskTitleWrapper">
                        <h3>해야 할 일</h3>
                        <h2>*{currentTodo ? currentTodo.title : "제목을 불러올 수 없습니다"}</h2>
                    </div>
                    <div className="taskBodyWrapper">
                        <h3>내용</h3>
                        <h2>*{currentTodo ? currentTodo.content : "내용을 불러올 수 없습니다"}</h2>
                    </div>
                </div>)}


            {editing === currentTodo.id && (
                <div className='editingInputWrapper'>
                    <input
                        className='editingInput'
                        type="text"
                        defaultValue={currentTodo.title}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="제목을 수정하세요" />
                    <input
                        className='editingInput'
                        type="text"
                        defaultValue={currentTodo.content}
                        onChange={(e) => setEditBody(e.target.value)}
                        placeholder="내용을 수정하세요" />
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