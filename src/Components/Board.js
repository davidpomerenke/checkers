import React from 'react'
import Row from './Row'

export default class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7].map(y =>
            <Row y={y} state={this.props.state} key={y.toString()} />
          )
        }
      </div>
    )
  }
}
