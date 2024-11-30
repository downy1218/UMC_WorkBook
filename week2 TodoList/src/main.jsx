// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import DetailPage from "./DetailPage";
import './index.css';
import { TodoContextProvider } from './Context/todoContext.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <TodoContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/todoDetail/:todoId" element={<DetailPage />}></Route>
                </Routes>
            </BrowserRouter>
        </TodoContextProvider>
    </QueryClientProvider>
);
