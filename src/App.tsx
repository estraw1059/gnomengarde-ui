import React, { useState } from 'react';
import './App.css';
import Prompt from './Component/Prompt';


function App() {
  const [playerName, setPlayerName] = useState();

  //This app will have two components:
  //1. Login: This will take the players name and log them into the room. 
  //2. Room Selection: This will have a room input which will spit back info

  return (
    <div className="App">
      Basic App
      <Prompt/>
    </div>
  );
}

export default App;
