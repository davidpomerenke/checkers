import React from 'react'
import './App.css'
import './checkers'
import { checkers } from './checkers'

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

const checkerStyle = (y, x) => ({
  top: 'calc(50vh - 50vmin + 1.25vmin + ' + 12.5 * (7 - y) + 'vmin)',
  left: 'calc(50vw - 50vmin + 1.25vmin + ' + 12.5 * x + 'vmin)'
})

class Checker extends React.Component {
  render () {
    return (
      <div className='checker' style={checkerStyle(this.props.y, this.props.x)} />
    )
  }
}

class Checkers extends React.Component {
  render () {
    return checkers.initialState[this.props.player].map(([y, x]) =>
      <Checker y={y} x={x} key={y + ',' + x} />
    )
  }
}

function App () {
  return (
    <div className='app'>
      <Board state='' />
      <Checkers player='p' />
      <Checkers player='q' />
    </div>
  )
}

export default App
