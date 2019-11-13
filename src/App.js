import React from 'react'
import './App.css'

class Tile extends React.Component {
  colour (y, x) {
    return (y + x) % 2 === 0 ? 'light-tile' : 'dark-tile'
  }

  render () {
    return (
      <div className={this.colour(this.props.y, this.props.x)} />
    )
  }
}

class Row extends React.Component {
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

class Board extends React.Component {
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

function App () {
  return (
    <Board state='' />
  )
}

export default App
