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
      clickedChecker: [],
      highlights: [],
      finished: false
    }
  }

  render () {
    if (checkers.terminalTest(this.state.state) && !this.state.finished) {
      this.setState({ finished: true })
    }

    const eq = ([y1, x1], [y2, x2]) => y1 === y2 && x1 === x2

    return (
      <div
        className='app'
        onDoubleClick={() => {
          if (this.state.finished) {
            this.setState({
              state: checkers.initialState,
              clickedChecker: [],
              highlights: [],
              finished: false
            })
          }
        }}
      >
        <Board
          highlights={this.state.highlights}
          parentCallback={(y, x) =>
            this.setState({
              state: checkers.result(this.state.state, checkers.actions(this.state.state).filter(action =>
                eq(action[0], this.state.clickedChecker) &&
                eq(action[action.length - 1], [y, x])
              )[0]),
              /**
               * TODO:
               * when there are several paths to one square,
               * let the user choose, somehow
               */
              highlights: []
            })}
        />
        {['p', 'q'].map(p =>
          <CheckersGroup
            key={p}
            player={p}
            pieces={this.state.state[p]}
            parentCallback={(y, x) => {
              this.setState({
                clickedChecker: [y, x],
                highlights: checkers.actions(this.state.state).filter(action =>
                  eq(action[0], [y, x])).map(action => action[action.length - 1])
              })
            }}
          />
        )}
        {
          this.state.finished && (
            <div className='subtitles'>
              <p>
                {checkers.heuristic(this.state.state) > 0 ? 'Brown' : 'Beige'} wins. Congratulations!
                <br />
              </p>
              <p>
                Doubleclick to play again.
              </p>
            </div>
          )
        }
      </div>
    )
  }
}

export default App
