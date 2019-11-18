import React from 'react'
import './App.css'
import { checkers, eq } from './checkers'
import { depthLimitedMinimaxDecision, depthLimitedMaximinDecision } from './minimax'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'
import Subtitles from './Components/Subtitles'
import { errorMessage, CongratulationMessage } from './messages'

class App extends React.Component {
  constructor () {
    super()
    // initialize game state and ui configuration
    this.state = {
      state: checkers.initialState, // game state (cf. `checkers.js`)
      highlightedChecker: [], // highlighted checker piece coordinates
      highlights: [], // highlighted board squares coordinates
      pai: undefined, // whether player p is played by an ai
      qai: undefined, // whether player q is played by an ai
      message: '' // message to be displayed in subtitle style
    }
    // note that react state variables are accessed via `this.state` in general,
    // so the game state is accessed via `this.state.state`
  }

  render () {
    setTimeout(() => this.aiMoves(), 500)

    return (
      <div className='app' onDoubleClick={() => this.handleDoubleClick()}>
        <Board
          highlights={this.state.highlights}
          parentCallback={(y, x, validMove) => this.moveResult(y, x, validMove)}
        />
        {['p', 'q'].map(player =>
          <CheckersGroup
            key={player}
            player={player}
            pieces={this.state.state[player]}
            highlightedChecker={this.state.highlightedChecker}
            parentCallback={(y, x) => this.highlightResult(y, x, player)}
          />
        )}
        <Subtitles
          message={this.state.message}
          parentCallback={(player, type) => this.setState({ [player + 'ai']: type })}
          pai={this.state.pai}
          qai={this.state.qai}
        />
      </div>
    )
  }

  handleDoubleClick () {
    // TODO: display help
    if (checkers.terminalTest(this.state.state)) {
      // reset the game state and the ui
      this.setState({
        state: checkers.initialState,
        highlightedChecker: [],
        highlights: [],
        pai: undefined,
        qai: undefined
      })
    }
  }

  moveResult (y, x, validMove) {
    if (validMove) {
      // when the user makes a manual move on one side, disable the ai for that side
      if (this.state.pai === undefined) this.setState({ pai: false })
      else if (this.state.qai === undefined) this.setState({ qai: false })

      // perform move from highlighted checker to selected square
      this.setState({
        state: checkers.result( // update checker positions
          this.state.state,
          checkers.actions(this.state.state).filter(action =>
            eq(action[0], this.state.highlightedChecker) &&
            eq(action[action.length - 1], [y, x])
          )[0]),
        /**
         * TODO:
         * when there are several paths to one square, let the user choose, somehow
         * at the moment, the fist (arbitrary) move is chosen: `(...).filter(...)[0]`
         * remove highlights
         */
        highlightedChecker: [],
        highlights: [],
        message: checkers.terminalTest(this.state.state) ? <CongratulationMessage state='this.state.state' /> : ''
      })
    } else this.setState({ message: errorMessage('invalid move', this.state, y, x) })
  }

  highlightResult (y, x, player) {
    if (player === this.state.state.player) {
      if (checkers.actions(this.state.state).some(action => eq(action[0], [y, x]))) {
        this.setState({
          highlightedChecker: [y, x],
          message: '',
          highlights: checkers.actions(this.state.state).filter(action =>
            eq(action[0], [y, x])).map(action => action[action.length - 1])
        })
      }
    }
    this.setState({ message: errorMessage('invalid checker', this.state, y, x, player) })
  }

  aiMoves () {
    console.log(this.state.pai, this.state.qai)
    if (!checkers.terminalTest(this.state.state)) {
      const limit = type => type === 'dumb' ? 1 : type === 'intermediate' ? 3 : 4
      const randAction = actions => actions[Math.floor(Math.random() * actions.length)]
      if (this.state.pai && this.state.state.player === 'p') {
        // ai move for player p
        if (this.state.pai === 'random') {
          // random move
          this.setState({
            state: checkers.result(
              this.state.state, randAction(checkers.actions(this.state.state)))
          })
        } else {
          // minimax move
          this.setState({
            state: checkers.result(
              this.state.state, depthLimitedMinimaxDecision(
                checkers, this.state.state, limit(this.state.pai)).action)
          })
        }
      } else if (this.state.qai && this.state.state.player === 'q') {
        // ai move for player q
        if (this.state.qai === 'random') {
          // random move
          this.setState({
            state: checkers.result(
              this.state.state, randAction(checkers.actions(this.state.state)))
          })
        } else {
          // maximin move
          this.setState({
            state: checkers.result(
              this.state.state, depthLimitedMaximinDecision(
                checkers, this.state.state, limit(this.state.qai)).action)
          })
        }
      }
    } else {
      this.setState({
        message: (checkers.heuristic(this.state.state) > 0 ? 'Brown' : 'Beige') + ' wins. Congratulations!'
      })
    }
  }
}

export default App
