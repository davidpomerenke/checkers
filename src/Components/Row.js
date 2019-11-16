import React from 'react'
import Square from './Square'

export default class Row extends React.Component {
  render () {
    return (
      <div className='row'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7].map(x =>
            <Square
              highlighted={
                this.props.highlights.some(([y2, x2]) => y2 === this.props.y && x2 === x)
              }
              y={this.props.y}
              x={x}
              state={this.props.state}
              parentCallback={
                () => this.props.parentCallback(this.props.y, x)
              }
              key={x.toString()}
            />
          )
        }
      </div>
    )
  }
}
