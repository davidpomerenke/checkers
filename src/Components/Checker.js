import React from 'react'

export default class Checker extends React.Component {
  checkerStyle (y, x) {
    return {
      top: 'calc(50vh - 50vmin + 1.25vmin + ' + 12.5 * (7 - y) + 'vmin)',
      left: 'calc(50vw - 50vmin + 1.25vmin + ' + 12.5 * x + 'vmin)'
    }
  }

  render () {
    return (
      <div
        onClick={() => this.props.parentCallback()}
        className={
          (this.props.player === 'p' ? 'checker-dark' : 'checker-light') +
          (this.props.highlighted ? ' highlighted' : '') +
          (this.props.royal ? ' royal' : '')
        }
        style={this.checkerStyle(this.props.y, this.props.x)}
      />
    )
  }
}
