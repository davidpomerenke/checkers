import React from 'react'
import './App.css'
import { checkers, eq, casualty } from './aima/checkers'
import { minimaxDecision, maximinDecision } from './aima/minimax'
import { alphaBetaSearch, betaAlphaSearch } from './aima/alphabeta'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'
import Subtitles from './Components/Subtitles'

const config = {
  pruning: false,
  limits: {
    dumb: 1,
    intermediate: 2,
    smart: 3
  },
  pauseTime: 700 /* ms */,
  animationTime: 300 /* ms */,
  highlights: true
}

class App extends React.Component {
  constructor () {
    super()
    // initialize game state and ui configuration
    this.state = {
      state: checkers.initialState, // game state (cf. `checkers.js`)
      oldState: checkers.initialState, // previous game state, for animations
      selectedChecker: [], // coordinates of the selected checker piece
      ai: { // whether the players are played by an ai and if so which one
        p: undefined,
        q: undefined
      },
      error: [], // user interaction errors to be shown as subtitles
      highlights: config.highlights, // whether possible actions are highlighted
      displayQueue: [], // contains action parts which still have to be displayed
      animation: [],
      casualty: false
    }
    // note that react state variables are accessed via `this.state` in general,
    // so the game state is accessed via `this.state.state`
  }

  render () {
    return (
      <div className='app'>
        <Board
          highlightedSquares={
            checkers.actions(this.state.state) // TODO:
              .filter(action => eq(action[0], this.state.selectedChecker))
              .map(action => action[action.length - 1])
          }
          highlights={this.state.highlights}
          parentCallback={(y, x, validMove) => this.moveResult(y, x, validMove)}
        />
        {['p', 'q'].map(player =>
          <CheckersGroup
            key={player}
            player={player}
            pieces={this.state.state[player]}
            selectedChecker={this.state.selectedChecker}
            highlightedCheckers={// TODO:
              this.state.highlights &&
              this.state.state.player === player &&
              !this.state.ai[this.state.state.player]
                ? checkers.actions(this.state.state).map(action => action[0])
                : []
            }
            parentCallback={(y, x) => this.highlightResult(y, x, player)}
            animation={this.state.animation}
            casualty={this.state.casualty}
          />
        )}
        <Subtitles
          parentCallback={arg => {
            if ('highlights' in arg) {
              this.setState({ highlights: arg.highlights })
            } else if ('ai' in arg) {
              this.setState({ ai: { ...this.state.ai, [arg.ai[0]]: arg.ai[1] } })
              setTimeout(() => this.aiMoves(), 0)
            }
          }}
          error={this.state.error}
          ai={this.state.ai}
          state={this.state.state}
          highlights={this.state.highlights}
          limits={config.limits}
        />
      </div>
    )
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
        displayQueue: [
          checkers.actions(this.state.state).filter(action =>
            eq(action[0], this.state.selectedChecker) &&
            eq(action[action.length - 1], [y, x])
          )[0]
        ]
      })
      /**
       * TODO:
       * when there are several paths to one square, let the user choose, somehow
       * at the moment, the fist (arbitrary) move is chosen: `(...).filter(...)[0]`
       */
      setTimeout(() => this.move(), 0)
    } else this.setState({ error: ['invalid move', this.state, y, x] })
  }

  highlightResult (y, x, player) {
    if (player === this.state.state.player) {
      if (checkers.actions(this.state.state).some(action => eq(action[0], [y, x]))) {
        this.setState({
          selectedChecker: [y, x],
          error: []
        })
      } else {
        this.setState({ error: ['invalid checker', this.state, y, x, player] })
      }
    } else {
      this.setState({ error: ['invalid checker', this.state, y, x, player] })
    }
  }

  move () {
    if (!checkers.terminalTest(this.state.state) && this.state.displayQueue.length > 0) {
      const action = this.state.displayQueue[0]
      if (this.state.displayQueue.length > 1 || action.length > 2) {
        setTimeout(() => this.move(), config.pauseTime + config.animationTime)
      } else {
        setTimeout(() => this.aiMoves(), config.pauseTime + config.animationTime)
      }
      log(this.state.state.player, action)
      this.setState({
        state: {
          ...checkers.result(this.state.state, action.slice(0, 2)),
          player: action.length <= 2 && this.state.displayQueue.length <= 1
            ? this.state.state.opponent
            : this.state.state.player,
          opponent: action.length <= 2 && this.state.displayQueue.length <= 1
            ? this.state.state.player
            : this.state.state.opponent
        },
        displayQueue: [
          ...action.length > 2 ? [action.slice(1)] : [],
          ...this.state.displayQueue.slice(1)
        ],
        error: [],
        selectedChecker: [],
        animation: action.slice(0, 2),
        casualty: this.state.state[this.state.state.opponent].find(checker =>
          casualty(checker, action.slice(0, 2)))
      })
    }
  }

  aiMoves () {
    const search = {
      p: config.pruning ? alphaBetaSearch : minimaxDecision,
      q: config.pruning ? betaAlphaSearch : maximinDecision
    }
    const randAction = actions => actions[Math.floor(Math.random() * actions.length)]
    const move = player => {
      this.setState({
        displayQueue: [this.state.ai[player] === 'random'
          // random move
          ? randAction(checkers.actions(this.state.state))
          // minimax / maximin move
          : search[player](checkers, this.state.state, config.limits[this.state.ai[player]]).action]
      })
      setTimeout(() => this.move(), config.pauseTime + config.animationTime)
    }
    if (this.state.ai.p && this.state.state.player === 'p') {
      move('p')
    } else if (this.state.ai.q && this.state.state.player === 'q') {
      move('q')
    }
  }
}

const log = (player, action) =>
  console.log(
    (player === 'p' ? 'brown: ' : 'beige: ') +
    action.map(([y, x]) => y + ', ' + x).join(' -> '))

export default App
