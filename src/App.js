import React from 'react'
import './App.css'
import { checkers } from './checkers'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      state: checkers.initialState,
      highlights: []
    }
  }

  render () {
    return (
      <div className='app'>
        <Board
          highlights={this.state.highlights}
          parentCallback={action =>
            this.setState({
              state: checkers.result(this.state.state, action),
              highlights: []
            })}
        />
        {
          ['p', 'q'].map(p =>
            <CheckersGroup
              key={p}
              player={p}
              state={this.state.state}
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
