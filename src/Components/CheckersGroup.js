import React from 'react'
import Checker from './Checker'

export default class CheckersGroup extends React.Component {
  render () {
    return this.props.pieces.map(([y, x]) =>
      <Checker
        player={this.props.player}
        highlightedChecker={this.props.highlightedChecker}
        parentCallback={() => this.props.parentCallback(y, x)}
        y={y}
        x={x}
        royal={this.props.pieces.find(p => p[0] === y && p[1] === x)[2]}
        key={y + ',' + x}
      />
    )
  }
}
