import React from 'react'
import Checker from './Checker'

export default class CheckersGroup extends React.Component {
  render () {
    return this.props.state[this.props.player].map(([y, x]) =>
      <Checker
        state={this.props.state}
        player={this.props.player}
        parentCallback={() => this.props.parentCallback(y, x)}
        y={y}
        x={x}
        key={y + ',' + x}
      />
    )
  }
}
