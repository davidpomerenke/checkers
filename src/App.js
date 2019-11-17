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

    if (this.state.pai && this.state.state.player === 'p') {
      console.log('Hi, I\'m Ada the AI. It\'s my turn, nice!')
    } else if (this.state.qai && this.state.state.player === 'q') {
      console.log('Hi, I\'m Alan the AI. It\'s my turn, cool!')
    }

    return (
      <div
        className='app'
        onDoubleClick={() => {
          if (!('pai' in this.state)) {
            this.setState({
              pai: true
            })
          } else if (!('qai' in this.state)) {
            this.setState({
              qai: true
            })
          } else if (this.state.finished) {
            this.setState({
              state: checkers.initialState,
              clickedChecker: [],
              highlights: [],
              pai: undefined,
              qai: undefined,
              finished: false
            })
          }
        }}
      >
        <Board
          highlights={this.state.highlights}
          parentCallback={(y, x) => {
            if (!('pai' in this.state)) this.setState({ pai: false })
            else if (!('qai' in this.state)) this.setState({ qai: false })

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
            })
          }}
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
        <div className='subtitles'>
          {this.state.finished && (
            <p>
              {checkers.heuristic(this.state.state) > 0 ? 'Brown' : 'Beige'} wins. Congratulations! <br />
              Doubleclick to play again.
            </p>
          )}
          {'pai' in this.state || (
            <p>
              Brown starts. <br />
              Make a move or doubleclick if the AI should play the brown side.
            </p>
          )}
          {'pai' in this.state && ('qai' in this.state || (
            <p>
              Beige is next. <br />
              Make a move or doubleclick if the AI should play the beige side.
            </p>
          ))}
        </div>
      </div>
    )
  }
}

const eq = ([y1, x1], [y2, x2]) => y1 === y2 && x1 === x2

export default App
