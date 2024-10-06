import MoviePosters from './Components/Poster.js';
import {  Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './Pages/Login.js';
import RegisterPage from './Pages/Register.js';
import RootLayout from './layout/root-layout.js';
import SearchPage from './Pages/Search.js';
import SearchMoviePage from './Pages/SearchMovie.js';
import UpComing from './Pages/Up-coming.js';
import Playing from './Pages/Playing.js';
import Popular from './Pages/Popular.js';
import Top from './Pages/Top-rated.js';

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

            <Route path='movie/playing' element={<Playing/>}></Route>
            <Route path='movie/popular' element={<Popular/>}></Route>
            <Route path='movie/top' element={<Top/>}></Route>
            <Route path='movie/upcoming' element={<UpComing/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> 
      

    </>
  )
};

export default App;
