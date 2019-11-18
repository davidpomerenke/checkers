import React from 'react'
import Checker from './Checker'
import { eq } from '../aima/checkers'

export default class CheckersGroup extends React.Component {
  render () {
    return this.props.pieces.map(([y, x]) =>
      <Checker
        player={this.props.player}
        selectedChecker={this.props.selectedChecker}
        highlighted={this.props.highlightedCheckers.some(pos => eq(pos, [y, x]))}
        parentCallback={() => this.props.parentCallback(y, x)}
        y={y}
        x={x}
        royal={this.props.pieces.find(p => eq(p, [y, x]))[2]}
        key={y + ',' + x}
      />
    )
  }
}
