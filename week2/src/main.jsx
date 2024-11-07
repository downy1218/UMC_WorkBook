// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContextProvider } from './Context/todoContext.jsx';

createRoot(document.getElementById('root')).render(
    <TodoContextProvider>
        <App/>
    </TodoContextProvider>
);
