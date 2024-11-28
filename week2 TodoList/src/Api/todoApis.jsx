import { useParams } from "react-router-dom";

const baseUrl = 'http://localhost:3000';


export const todoApi = {
    //모든 투두리스트 조회
    getAllTodos: async() =>{
        try{
            const response = await fetch(`${baseUrl}/todo`);
            console.log('API 응답 상태:', response.status); //서버상태확인

            const data =  await response.json();
            console.log('api받아온데이터',data[0])
            console.log('API 응답 전체:', response);
            return data;
        }
        catch(error){
            console.log('전체 리스트 조회 실패:',error)
        }
    },
    // getAllTodos: async() => {
    //     try {
    //         const response = await fetch(`${baseUrl}/todo`);
    //         console.log('Response status:', response.status);
            
    //         // response의 실제 내용 확인
    //         const responseText = await response.text();
    //         console.log('Raw response:', responseText);
            
    //         // 텍스트를 JSON으로 파싱 시도
    //         try {
    //             const data = JSON.parse(responseText);
    //             console.log('Parsed data:', data);
    //             return data;
    //         } catch (parseError) {
    //             console.log('JSON 파싱 에러:', parseError);
    //             console.log('파싱 실패한 데이터:', responseText);
    //         }
    //     }
    //     catch(error) {
    //         console.log('전체 리스트 조회 실패:', error);
    //         throw error;
    //     }
    // },

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