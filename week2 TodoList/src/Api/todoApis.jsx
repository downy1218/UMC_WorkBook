import { useParams } from "react-router-dom";

const baseUrl = 'http://localhost:3000';


export const todoApi = {
    //모든 투두리스트 조회
    getAllTodos: async() =>{
        try{
            const response = await fetch(`${baseUrl}/todo`);
            console.log('API 응답 상태:', response.status); //서버상태확인

            const rawData =  await response.json();
            console.log('받아온 전체데이터',rawData);
            const [data] = rawData //이중배열 첫 번째 요소만 추출해서 data라는 변수에 할당
            console.log('받아온 데이터 안쪽:', data); //내가 서버에 추가한 리스트 데이터들
            return data;
        }
        catch(error){
            console.log('전체 리스트 조회 실패:',error)
        }
    },

    //id별 조회
    getTodoById: async(id)=>{
        try{
            const idToNum = parseInt(id)
            console.log('요청하는id:',id)
            console.log('요청 URL:', `${baseUrl}/todo/${idToNum}`);

            const response = await fetch(`${baseUrl}/todo/${idToNum}`);
            console.log(response)
            return response.json();
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
            const data =  await response.json(); //response.json()도 Promise를 반환하기 때문에 await가 필요
            return data
            console.log("Updated todo response:", response);
            console.log(data)
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
            return await response.text();
        }
        catch(error){
            if (!response.ok) throw new Error("할 일 삭제에 실패했습니다.");
            console.log('투두삭제실패:',error)
        }
    }
};