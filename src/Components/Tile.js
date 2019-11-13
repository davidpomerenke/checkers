import React from 'react'

export default class Tile extends React.Component {
  colour (y, x) {
    return (y + x) % 2 === 0 ? 'light-tile' : 'dark-tile'
  }

  render () {
    return (
      <div className={this.colour(this.props.y, this.props.x)} />
    )
  }
}
