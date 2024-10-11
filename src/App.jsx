import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard';



function App() {

  // console.log(characters);

  return (
    <div id='app'>
      <h1>Play the Memory Game!</h1>
      <GameBoard />
    </div>
  )
}

export default App
