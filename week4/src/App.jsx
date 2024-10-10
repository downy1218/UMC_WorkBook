import MoviePosters from './Components/Poster.jsx';
import {  Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './Pages/Login.jsx';
import RegisterPage from './Pages/Register.jsx';
import RootLayout from './layout/root-layout.jsx';
import SearchPage from './Pages/Search.jsx';
import SearchMoviePage from './Pages/SearchMovie.jsx';
import MovieDetail from './Pages/MovieDetail.jsx';

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

