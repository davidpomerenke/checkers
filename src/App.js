import React from 'react'
import './App.css'
import { checkers } from './checkers'
import Board from './Components/Board'
import Player from './Components/Player'

class App extends React.Component {
  constructor () {
    super()
    this.state = { highlights: [] }
  }

  render () {
    return (
      <div className='app'>
        <Board highlights={this.state.highlights} />
        {
          ['p', 'q'].map(p =>
            <Player
              key={p}
              player={p}
              state={checkers.initialState}
              parentCallback={
                highlights =>
                  this.setState({ highlights: highlights })
              }
            />
          )
        }
      </div>
    )
  }
}

export default App
