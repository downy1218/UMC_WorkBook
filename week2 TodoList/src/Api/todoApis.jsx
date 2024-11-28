import { useParams } from "react-router-dom";

const baseUrl = 'http://localhost:3000';


export const todoApi = {
    //모든 투두리스트 조회
    getAllTodos: async() =>{
        try{
            const response = await fetch(`${baseUrl}/todo`);
            return await response.json();
        }
        catch(error){
            console.log('전체 리스트 조회 실패:',error)
        }
    },

    //id별 조회
    getTodoById: async(id)=>{
        try{
            const response = await fetch(`${baseUrl}/todo/${id}`);
            return await response.json();
        }
        catch(error){
            console.log("개별 리스트 조회 실패:",error)
        }
    },

    //todo 작성 myTodo:새로 생성되는 투두 객체 
    createTodo: async(myTodo)=>{
        try{
            const response = await fetch(`${baseUrl}/todo`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(myTodo)
            })
            return await response.json();
        }
        catch(error){
            console.log('투두생성실패:',error)
        }
    },

    //todo 수정
    updateTodo: async(id,myTodo)=>{
        try{
            const response = await fetch(`${baseUrl}/todo/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(myTodo)
            })
        }
        catch(error){
            console.log('투두수정실패:',error)
        }
    },

    //todo 삭제
    deleteTodo: async(id)=>{
        try{
            const response = await fetch(`${baseUrl}/todo/${id}`,{
                method:'DELETE'
            })
            return await response.json();
        }
        catch(error){
            console.log('투두삭제실패:',error)
        }
    }
};