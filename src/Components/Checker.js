import React from 'react'
import { eq } from '../checkers'

const checkerStyle = (y, x, royal) => ({
  top: 'calc(50vh - 50vmin + 1.25vmin + ' + 12.5 * (7 - y) + 'vmin)',
  left: 'calc(50vw - 50vmin + 1.25vmin + ' + 12.5 * x + 'vmin)'
})

export default class Checker extends React.Component {
  render () {
    return (
      <div
        onClick={e => {
          this.props.parentCallback()
        }}
        className={
          this.props.player === 'p'
            ? 'checker-dark' +
            (eq(this.props.clickedChecker, [this.props.y, this.props.x]) ? ' active' : '') +
            (this.props.royal ? ' royal' : '')
            : 'checker-light' +
            (eq(this.props.clickedChecker, [this.props.y, this.props.x]) ? ' active' : '') +
            (this.props.royal ? ' royal' : '')
        }
        style={checkerStyle(this.props.y, this.props.x)}
      />
    )
  }
}
