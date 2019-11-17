import React from 'react'

export default class Square extends React.Component {
  colour (highlighted) {
    return (this.props.y + this.props.x) % 2 === 1
      ? 'light-tile'
      : !highlighted
        ? 'dark-tile'
        : 'dark-tile active'
  }

  render () {
    return (
      <div
        ref={[this.props.y, this.props.x].join('-')}
        className={this.colour(this.props.highlighted)}
        onClick={e => {
          if (this.props.highlighted) this.props.parentCallback()
        }}
      />
    )
  }
}
