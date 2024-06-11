import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Gameplay from './Component/Gameplay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <Gameplay /> : <Home toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
