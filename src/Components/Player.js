import React from 'react'
import Checker from './Checker'

export default class Player extends React.Component {
  render () {
    return this.props.state[this.props.player].map(([y, x]) =>
      <Checker
        state={this.props.state}
        player={this.props.player}
        parentCallback={highlights => this.props.parentCallback(highlights)}
        y={y}
        x={x}
        key={y + ',' + x}
      />
    )
  }
}
