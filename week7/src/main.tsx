import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

//여기서 !는 TypeScript에게 "이 값은 절대 null이 아닐 거야"라고 알려주는 역할. 
//HTML에 'root' ID를 가진 요소가 반드시 있다는 것을 우리가 확신할 때 사용할 수 있음.
createRoot(document.getElementById('root')!).render(
  
    <App />
 
)
