import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard';
import DifficultySelector from './components/DifficultySelector';



function App() {
  const [difficulty, setDifficulty] = useState(null);

  function onClick(diff) {
    console.log("setting difficulty to " + diff);

    setDifficulty(diff);
  }

  return (
    <div id='app'>
      <h1>Play the Memory Game!</h1>
      {difficulty === null ?
        <DifficultySelector onClick={onClick} /> :
        <GameBoard difficulty={difficulty} onClick={setDifficulty} />
      }
    </div>
  )
}

export default App
