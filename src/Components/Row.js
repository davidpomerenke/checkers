import React from 'react'
import Tile from './Tile'

export default class Row extends React.Component {
  render () {
    return (
      <div className='row'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7].map(x =>
            <Tile
              highlighted={
                this.props.highlights.some(([, , [yy, xx]]) =>
                  yy === this.props.y && xx === x)
              }
              y={this.props.y}
              x={x}
              state={this.props.state}
              parentCallback={
                () => this.props.parentCallback(
                  this.props.highlights
                    .find(([, , [yy, xx]]) =>
                      yy === this.props.y && xx === x))
              }
              key={x.toString()}
            />
          )
        }
      </div>
    )
  }
}
