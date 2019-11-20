import React from 'react'

export default class Checker extends React.Component {
  constructor () {
    super()
    this.state = { transform: 'translate3d(0, 0, 0)' }
  }

  checkerStyle (y, x, animation) {
    if (animation) setTimeout(() => this.animation([y, x], animation), 10)
    return {
      top: 'calc(50vh - 50vmin + 1.25vmin + ' + 12.5 * (7 - y) + 'vmin)',
      left: 'calc(50vw - 50vmin + 1.25vmin + ' + 12.5 * x + 'vmin)',
      transition: 'transform 300ms ease-in-out'
    }
  }

  animation ([y, x], [y2, x2]) {
    this.setState({
      transform: 'translate3d(' +
        (12.5 * (x2 - x)) + 'vmin,' +
        (-12.5 * (y2 - y)) + 'vmin,' +
        '0)'
    })
  }

  render () {
    return (
      <div
        onClick={() => {
          this.props.parentCallback()
        }}
        className={
          (this.props.player === 'p' ? 'checker-dark' : 'checker-light') +
          (this.props.highlighted ? ' highlighted' : '') +
          (this.props.royal ? ' royal' : '')
        }
        style={
          ({
            ...this.checkerStyle(this.props.y, this.props.x, this.props.animation),
            ...this.state
          })
        }
      />
    )
  }
}
