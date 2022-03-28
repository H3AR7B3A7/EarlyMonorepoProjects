import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState({message: ''})
  const [games, setGames] = useState({message: ''})

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage)
  }, []);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames)
  }, []);

  return (
    <>
      <h1>Board Game Hoard: Review!</h1>
      <div>{m.message}</div>
      <div>{JSON.stringify(games)}</div>
    </>
  );
};

export default App;
