import React from 'react'
import './App.css'
import { checkers } from './checkers'
import Board from './Components/Board'
import Player from './Components/Player'

function App () {
  return (
    <div className='app'>
      <Board />
      <Player player='p' state={checkers.initialState} />
      <Player player='q' state={checkers.initialState} />
    </div>
  )
}

export default App
