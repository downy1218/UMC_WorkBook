import './App.css';
import { MOVIES } from './mocks/movie';
import Poster from './Components/Poster';

function App() {
  return (
    <div className="movies">
    {MOVIES.results.map(a => (
      <Poster
        key={a.id}
        title={a.title}
        poster_path={a.poster_path}
      />
    ))}
  </div>
  )
};

export default App;
