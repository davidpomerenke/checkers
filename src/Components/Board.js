import React from 'react'
import Row from './Row'

export default class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        {
          [7, 6, 5, 4, 3, 2, 1, 0].map(y =>
            <Row
              y={y}
              highlights={this.props.highlights}
              state={this.props.state}
              key={y.toString()}
              parentCallback={this.props.parentCallback}
            />
          )
        }
      </div>
    )
  }
}
