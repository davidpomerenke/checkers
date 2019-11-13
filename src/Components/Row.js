import React from 'react'
import Tile from './Tile'

export default class Row extends React.Component {
  render () {
    return (
      <div className='row'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7].map(x =>
            <Tile x={x} y={this.props.y} state={this.props.state} key={x.toString()} />
          )
        }
      </div>
    )
  }
}
