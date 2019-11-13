import React from 'react'
import Checker from './Checker'

export default class Player extends React.Component {
  render () {
    return this.props.state[this.props.player].map(([y, x]) =>
      <Checker
        player={this.props.player}
        y={y}
        x={x}
        key={y + ',' + x}
      />
    )
  }
}
