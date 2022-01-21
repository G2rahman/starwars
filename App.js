import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/List';

function App() {
  const [starship, setStarship] = useState([]);
  const url = 'https://swapi.dev/api/starships/';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStarship(data.results));
  });
  return (
    <div className="starship">
      <List info={starship} />
    </div>
  );
}

export default App;
