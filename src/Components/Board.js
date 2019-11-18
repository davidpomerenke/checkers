import React from 'react'
import Square from './Square'

export default class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        {
          [7, 6, 5, 4, 3, 2, 1, 0].map(y =>
            <div className='row' key={y}>
              {
                [0, 1, 2, 3, 4, 5, 6, 7].map(x =>
                  <Square
                    highlighted={
                      this.props.highlights.some(([y2, x2]) => y2 === y && x2 === x)
                    }
                    y={y}
                    x={x}
                    state={this.props.state}
                    parentCallback={
                      (validMove) => this.props.parentCallback(y, x, validMove)
                    }
                    key={x}
                  />
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}
