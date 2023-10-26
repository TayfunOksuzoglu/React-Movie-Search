import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

function App() {
  const API_URL = `http://www.omdbapi.com/?apikey=6346747e`;

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  // useEffect(() => {
  //   searchMovie('Lord of the rings');
  // }, []);

  return <h1>Hi</h1>;
}

export default App;
