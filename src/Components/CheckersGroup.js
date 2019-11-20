import React from 'react'
import Checker from './Checker'
import { eq } from '../aima/checkers'

export default class CheckersGroup extends React.Component {
  render () {
    return this.props.pieces.map(([y, x]) => {
      const animated = this.props.animation.length > 0
      let y2, x2
      if (animated && eq(this.props.animation[1], [y, x])) {
        [y2, x2] = this.props.animation[0]
      }
      return (
        <Checker
          player={this.props.player}
          selectedChecker={this.props.selectedChecker}
          highlighted={this.props.highlightedCheckers.some(pos => eq(pos, [y, x]))}
          parentCallback={() => this.props.parentCallback(y, x)}
          y={animated ? y2 : y}
          x={animated ? x2 : x}
          animation={animated ? this.props.animation[1] : false}
          royal={this.props.pieces.find(p => eq(p, [y, x]))[2]}
          key={y + ',' + x}
        />
      )
    }
    )
  }
}
