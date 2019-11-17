import React from 'react'
import './App.css'
import { checkers, eq } from './checkers'
import { depthLimitedMinimaxDecision, depthLimitedMaximinDecision } from './minimax'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      state: checkers.initialState,
      clickedChecker: [],
      highlights: [],
      pai: undefined,
      qai: undefined,
      finished: false,
      message: ''
    }
  }

  render () {
    setTimeout(() => {
      if (checkers.terminalTest(this.state.state)) {
        if (!this.state.finished) {
          this.setState({ finished: true })
        }
      } else if (this.state.pai && this.state.state.player === 'p') {
        this.setState({
          state: checkers.result(
            this.state.state,
            depthLimitedMinimaxDecision(checkers, this.state.state, 3).action)
        })
      } else if (this.state.qai && this.state.state.player === 'q') {
        this.setState({
          state: checkers.result(
            this.state.state,
            depthLimitedMaximinDecision(checkers, this.state.state, 3).action)
        })
      }
    }, 500)

    return (
      <div
        className='app'
        onDoubleClick={() => {
          if (this.state.pai === undefined) {
            this.setState({
              pai: true
            })
          } else if (this.state.qai === undefined) {
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
            if (this.state.pai === undefined) this.setState({ pai: false })
            else if (this.state.qai === undefined) this.setState({ qai: false })

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
        {
          ['p', 'q'].map(p =>
            <CheckersGroup
              key={p}
              player={p}
              pieces={this.state.state[p]}
              clickedChecker={this.state.clickedChecker}
              parentCallback={(y, x) => {
                if (p === this.state.state.player) {
                  if (checkers.actions(this.state.state).some(action => eq(action[0], [y, x]))) {
                    this.setState({
                      clickedChecker: [y, x],
                      message: '',
                      highlights: checkers.actions(this.state.state).filter(action =>
                        eq(action[0], [y, x])).map(action => action[action.length - 1])
                    })
                  } else {
                    this.setState({
                      message: 'For some reason, you cannot move this piece.' // TODO:
                    })
                  }
                } else {
                  this.setState({
                    message: (p === 'p' ? 'Brown ' : 'Beige ') + ' is next.'
                  })
                }
              }}
            />
          )
        }
        <div className='subtitles'>
          {this.state.finished && (
            <p>
              {checkers.heuristic(this.state.state) > 0 ? 'Brown' : 'Beige'} wins. Congratulations! <br />
              Doubleclick to play again.
            </p>
          )}
          {this.state.pai === undefined && (
            <p>
              Brown starts. <br />
              Make a move, or doubleclick if the algorithm should play the brown checkers.
            </p>
          )}
          {this.state.pai !== undefined && this.state.qai === undefined && (
            <p>
              Beige is next. <br />
              Make a move, or doubleclick if the algorithm should play the beige checkers.
            </p>
          )}
          {this.state.message !== '' &&
            <p>
              {this.state.message}
            </p>
          }
        </div>
      </div>
    )
  }
}

export default App
