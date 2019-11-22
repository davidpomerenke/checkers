import React from 'react'
import './App.css'
import { checkers, eq, boardString } from 'aima-checkers'
import { minimaxDecision, maximinDecision, alphaBetaSearch, betaAlphaSearch } from 'aima'
import Board from './Components/Board'
import CheckersGroup from './Components/CheckersGroup'
import Subtitles from './Components/Subtitles'

const config = {
  pruning: false,
  limits: {
    dumb: 1,
    intermediate: 3,
    smart: 4
  },
  highlights: true,
  pauseTime: 700 /* ms */
}

class App extends React.Component {
  constructor () {
    super()
    // initialize game state and ui configuration
    this.state = {
      state: checkers.initialState, // game state (cf. `checkers.js`)
      selectedChecker: [], // coordinates of the selected checker piece
      ai: { // whether the players are played by an ai and if so which one
        p: undefined,
        q: undefined
      },
      error: [], // user interaction errors to be shown as subtitles
      highlights: config.highlights, // whether possible actions are highlighted
      displayQueue: [] // contains action parts which still have to be displayed
    }
    // note that react state variables are accessed via `this.state` in general,
    // so the game state is accessed via `this.state.state`
  }

  render () {
    return (
      <div className='app'>
        <Board
          highlightedSquares={
            checkers.actions(this.state.state)
              .filter(action => eq(action[0], this.state.selectedChecker))
              .map(action => action[action.length - 1])
          }
          highlights={this.state.highlights}
          parentCallback={(y, x, validMove) => this.move(y, x, validMove)}
        />
        {['p', 'q'].map(player =>
          <CheckersGroup
            key={player}
            player={player}
            pieces={this.state.state[player]}
            selectedChecker={this.state.selectedChecker}
            highlightedCheckers={
              this.state.highlights &&
                this.state.state.player === player &&
                !this.state.ai[this.state.state.player]
                ? checkers.actions(this.state.state).map(action => action[0])
                : []
            }
            parentCallback={(y, x) => this.highlight(y, x, player)}
          />
        )}
        <Subtitles
          parentCallback={arg => {
            if ('highlights' in arg) {
              this.setState({ highlights: arg.highlights })
            } else if ('ai' in arg) {
              this.setState({ ai: { ...this.state.ai, [arg.ai[0]]: arg.ai[1] } })
              setTimeout(() => this.aiMove(), 0)
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

  move (y, x, validMove) {
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
      setTimeout(() => this.step(), 0)
    } else this.setState({ error: ['invalid move', this.state, y, x] })
  }

  highlight (y, x, player) {
    if (
      player === this.state.state.player &&
      checkers.actions(this.state.state).some(action => eq(action[0], [y, x]))
    ) {
      this.setState({
        selectedChecker: [y, x],
        error: []
      })
    } else {
      this.setState({ error: ['invalid checker', this.state, y, x, player] })
    }
  }

  step () {
    if (!checkers.terminalTest(this.state.state) && this.state.displayQueue.length > 0) {
      const action = this.state.displayQueue[0]
      if (this.state.displayQueue.length > 1 || action.length > 2) {
        setTimeout(() => this.step(), config.pauseTime)
      } else {
        setTimeout(() => this.aiMove(), config.pauseTime)
      }
      console.log(moveToString(this.state.state.player, action))
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
        selectedChecker: []
      })
      console.log(boardString(this.state.state))
    }
  }

  aiMove () {
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
      setTimeout(() => this.step(), config.pauseTime + config.animationTime)
    }
    if (this.state.ai.p && this.state.state.player === 'p') {
      move('p')
    } else if (this.state.ai.q && this.state.state.player === 'q') {
      move('q')
    }
  }
}

const moveToString = (player, action) =>
  (player === 'p' ? 'brown: ' : 'beige: ') +
  action.map(([y, x]) => y + ', ' + x).join(' -> ')

export default App
