import React from 'react'
import { checkers } from '../checkers'

const checkerStyle = (y, x) => ({
  top: 'calc(50vh - 50vmin + 1.25vmin + ' + 12.5 * (7 - y) + 'vmin)',
  left: 'calc(50vw - 50vmin + 1.25vmin + ' + 12.5 * x + 'vmin)'
})

export default class Checker extends React.Component {
  render () {
    return (
      <div
        onClick={e => {
          this.props.parentCallback(
            checkers.actions(this.props.state)
              .filter(([, [y, x]]) =>
                y === this.props.y &&
                x === this.props.x
              )
          )
        }}
        ref={[this.props.state.player, this.props.y, this.props.x].join('-')}
        className={
          this.props.player === 'p'
            ? 'checker-dark'
            : 'checker-light'
        }
        style={checkerStyle(this.props.y, this.props.x)}
      />
    )
  }
}
