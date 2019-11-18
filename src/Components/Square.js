import React from 'react'

export default class Square extends React.Component {
  colour (highlighted, showHighlight) {
    return (this.props.y + this.props.x) % 2 === 1
      ? 'light-tile'
      : highlighted && showHighlight
        ? 'dark-tile active'
        : 'dark-tile'
  }

  render () {
    return (
      <div
        ref={[this.props.y, this.props.x].join('-')}
        className={this.colour(this.props.highlighted, this.props.showHighlight)}
        onClick={() => this.props.parentCallback(this.props.highlighted)}
      />
    )
  }
}
