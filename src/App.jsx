import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard';
import DifficultySelector from './components/DifficultySelector';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  function onClick(diff) {
    console.log("setting difficulty to " + diff);

    setDifficulty(diff);
  }

  return (
    <div id='app'>
      <h1 id='game-title'>Wind Waker Memory Game</h1>
      {difficulty === null ?
        <DifficultySelector onClick={onClick} /> : (
          <>
            <div className='scores'>
              <h2>Current Score: {score}</h2>
              <h2>High Score: {highScore}</h2>
            </div>
            <GameBoard
              difficulty={difficulty}
              onClick={setDifficulty}
              setHighScore={setHighScore}
              highScore={highScore}
              score={score}
              setScore={setScore} />
          </>)

      }
    </div >
  )
}

export default App
