import MoviePosters from './Components/Poster.js';
import {  Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './Pages/Login.js';
import RegisterPage from './Pages/Register.js';
import RootLayout from './layout/root-layout.js';
import SearchPage from './Pages/Search.js';
import SearchMoviePage from './Pages/SearchMovie.js';
import MovieDetail from './Pages/MovieDetail.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<MoviePosters />}></Route>  {/*중복 등장 고침*/}
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='register' element={<RegisterPage />}></Route>
            <Route path='search' element={<SearchPage/>}></Route>
            <Route path='searchMovie' element={<SearchMoviePage/>}></Route>


            <Route path="/movie/:category" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter> 
      

    </>
  )
};

export default App;
