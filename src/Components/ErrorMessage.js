import React from 'react'
import { checkers, eq, dist, playerDirection } from '../aima/checkers'

export default class ErrorMessage extends React.Component {
  message (type, state, y, x, player) {
    let message // clear prior subtitle messages
    if (type === 'invalid move') {
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
      if (state.state.player !== player) {
        // error messages for checker selections of the wrong colour
        if (state.selectedChecker.length === 2) {
          // if this is an attempted move
          message = 'You can only move to an empty square.'
        } else {
          // if this is an attempted checker selection
          message = (state.state.player === 'p' ? ' Brown ' : ' Beige ') + ' is next.'
        }
      } else if (!checkers.actions(state.state).some(action => eq(action[0], [y, x]))) {
        // error messages for invalid checker selections of the right colour
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
    const message = this.message(this.props.error[0], this.props.error[1], this.props.error[2], this.props.error[3], this.props.error[4])
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
