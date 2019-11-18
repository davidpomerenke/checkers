import React from 'react'
import './App.css'
import { checkers, eq } from './aima/checkers'
import { minimaxDecision, maximinDecision } from './aima/minimax'
import { alphaBetaSearch, betaAlphaSearch } from './aima/alphabeta'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'
import Subtitles from './Components/Subtitles'
import { errorMessage, CongratulationMessage } from './messages'

const config = {
  pruning: false,
  limitLevels: {
    dumb: 1,
    intermediate: 2,
    smart: 3
  },
  pauseTime: 500 // ms
}

const log = (player, action) =>
  console.log(
    (player === 'p' ? 'brown: ' : 'beige: ') +
    action.map(([y, x]) => y + ', ' + x).join(' -> '))

class App extends React.Component {
  constructor() {
    super()
    // initialize game state and ui configuration
    this.state = {
      state: checkers.initialState, // game state (cf. `checkers.js`)
      selectedChecker: [], // highlighted checker piece coordinates
      ai: { // whether the players are played by an ai and if so which one
        p: undefined,
        q: undefined
      },
      message: '' // message to be displayed in subtitle style
    }
    // note that react state variables are accessed via `this.state` in general,
    // so the game state is accessed via `this.state.state`

    setTimeout(() => this.regularActions(), config.pauseTime)
  }

  render () {
    return (
      <div className='app' onDoubleClick={() => this.handleDoubleClick()}>
        <Board
          highlightedSquares={checkers.actions(this.state.state).filter(action =>
            eq(action[0], this.state.selectedChecker)).map(action => action[action.length - 1])}
          parentCallback={(y, x, validMove) => this.moveResult(y, x, validMove)}
        />
        {['p', 'q'].map(player =>
          <CheckersGroup
            key={player}
            player={player}
            pieces={this.state.state[player]}
            selectedChecker={this.state.selectedChecker}
            parentCallback={(y, x) => this.highlightResult(y, x, player)}
          />
        )}
        <Subtitles
          message={this.state.message}
          parentCallback={(player, type) => {
            const ai = this.state.ai
            ai[player] = type
            this.setState({ ai: ai })
          }}
          pai={this.state.ai.p}
          qai={this.state.ai.q}
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
        selectedChecker: [],
        ai: {
          p: undefined,
          q: undefined
        }
      })
    }
  }

  moveResult (y, x, validMove) {
    if (validMove) {
      // when the user makes a manual move on one side, disable the ai for that side
      const ai = this.state.ai
      if (this.state.ai.p === undefined) ai.p = false
      else if (this.state.ai.q === undefined) ai.q = false
      this.setState({ ai: ai })

      // perform move from highlighted checker to selected square
      this.setState({
        state: checkers.result( // update checker positions
          this.state.state,
          checkers.actions(this.state.state).filter(action =>
            eq(action[0], this.state.selectedChecker) &&
            eq(action[action.length - 1], [y, x])
          )[0]),
        /**
         * TODO:
         * when there are several paths to one square, let the user choose, somehow
         * at the moment, the fist (arbitrary) move is chosen: `(...).filter(...)[0]`
         */
        selectedChecker: [],
        message: checkers.terminalTest(this.state.state) ? <CongratulationMessage state='this.state.state' /> : ''
      })
    } else this.setState({ message: errorMessage('invalid move', this.state, y, x) })
  }

  highlightResult (y, x, player) {
    if (player === this.state.state.player) {
      if (checkers.actions(this.state.state).some(action => eq(action[0], [y, x]))) {
        this.setState({
          selectedChecker: [y, x],
          message: ''
        })
      }
    }
    this.setState({ message: errorMessage('invalid checker', this.state, y, x, player) })
  }

  regularActions () {
    if (!checkers.terminalTest(this.state.state)) {
      this.aiMoves()
    } else {
      this.setState({
        message: (checkers.heuristic(this.state.state) > 0 ? 'Brown' : 'Beige') + ' wins. Congratulations!'
      })
    }
    setTimeout(() => this.regularActions(), config.pauseTime)
  }

  aiMoves () {
    const pSearch = config.pruning ? alphaBetaSearch : minimaxDecision
    const qSearch = config.pruning ? betaAlphaSearch : maximinDecision
    const search = player => player === 'p' ? pSearch : qSearch
    const move = player => {
      let action
      if (this.state.ai[player] === 'random') {
        // random move
        const randAction = actions => actions[Math.floor(Math.random() * actions.length)]
        action = randAction(checkers.actions(this.state.state))
      } else {
        // minimax move
        action = search(player)(
          checkers, this.state.state, config.limitLevels[this.state.ai[player]]
        ).action
      }
      log(player, action)
      this.setState({
        state: checkers.result(
          this.state.state,
          action),
        message: '',
        selectedChecker: []
      })
    }
    if (this.state.ai.p && this.state.state.player === 'p') {
      move('p')
    } else if (this.state.ai.q && this.state.state.player === 'q') {
      move('q')
    }
  }
}

export default App
