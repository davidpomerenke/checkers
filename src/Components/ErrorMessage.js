import React from 'react'
import { checkers, eq, dist, playerDirection } from '../aima/checkers'

export default class ErrorMessage extends React.Component {
  message (type, state, y, x, player) {
    let message
    if (type === 'invalid move') {
      // invalid click on a square
      if (state.selectedChecker.length !== 2) {
        message = 'Please select the checker you want to move.'
      } else if ((y + x) % 2 === 1) {
        message = 'You can only move diagonally – that is, to another black square.'
      } else if ((y - state.selectedChecker[0]) * playerDirection(state.state) <= 0) {
        message = 'You can only move forward (unless you are royal).'
      } else if (
        checkers.actions(state.state).some(action =>
          eq(action[0], state.selectedChecker) && dist(action[0], action[1]) / 2 === 2) &&
        dist(state.selectedChecker, [y, x]) / 2 === 1
      ) {
        message = 'There is a jump available, so you need to jump.' // the modal fallacy
      } else {
        message = 'You can only move one step at a time (unless you jump over your opponent\'s checker).'
      }
    } else if (type === 'invalid checker') {
      // invalid click on a checker
      if (state.state.player !== player) {
        // checker has the wrong colour
        if (state.selectedChecker.length === 2) {
          // another checker is already clicked, so this is probably an attempted move
          message = 'You can only move to an empty square.'
        } else {
          // no other checker is clicked, so this is probably an attempted checker selection
          message = (state.state.player === 'p' ? ' Brown ' : ' Beige ') + ' is next.'
        }
      } else if (!checkers.actions(state.state).some(action => eq(action[0], [y, x]))) {
        // checker has the right colour
        if (
          checkers.actions(state.state).some(action =>
            dist(action[0], action[1]) / 2 === 2) &&
          !checkers.actions(state.state).some(action =>
            eq(action[0], [y, x]) && dist(action[0], action[1]) / 2 === 2)
        ) {
          message = 'There is a jump available for one or more different checkers, so you need to perform one of these jumps.'
        } else {
          message = 'All moves of this checker are blocked.'
        }
      }
    }
    return message
  }

  render () {
    const message = this.message(...this.props.error)
    return message
      ? (
        <div>
          <p>
            {message}
          </p>
          <div>
            <span onClick={() => this.props.parentCallback('help')}>
              Read the rules.
            </span>
          </div>
        </div>)
      : ''
  }
}
