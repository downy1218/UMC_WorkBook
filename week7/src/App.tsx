import MoviePosters from './Components/Poster.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/Login.js';
import RegisterPage from './Pages/Register.js';
import RootLayout from './layout/root-layout.js';
import SearchPage from './Pages/Search.js';
import CategoryPage from './Pages/Category.js';
import MovieDetail from './Pages/MovieDetail.js';
import DetailInfo from './Pages/DetailInfo.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route index element={<MoviePosters />}></Route>  {/*중복 등장 고침*/}
              <Route path='login' element={<LoginPage />}></Route>
              <Route path='register' element={<RegisterPage />}></Route>
              <Route path='search' element={<SearchPage />}></Route>
              <Route path='category' element={<CategoryPage />}></Route>


              <Route path="/movie/:category" element={<MovieDetail />} />
              <Route path="/movie/detail/:movie_id" element={<DetailInfo />} /> {/*왜 detail을 추가해야할까 => 카테고리 경로랑 비슷해서 충돌나기 때문*/}
            </Route>
          </Routes>
        </BrowserRouter>


      </>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
};

export default App;

