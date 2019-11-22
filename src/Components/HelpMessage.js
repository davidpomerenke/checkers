import React from 'react'

export default class HelpMessage extends React.Component {
  render () {
    return (
      <div className='dialog help'>
        <div className='bottomed'>
          <div>
            <span onClick={() => this.props.parentCallback('hide')}>
              Hide help.
            </span>
          </div>
          <div>
            <p>
              Highlights are {this.props.highlights ? 'enabled. ' : 'disabled. '}
            </p>
          </div>
          <div>
            <span onClick={() => this.props.parentCallback('highlights', !this.props.highlights)}>
              {this.props.highlights ? 'Disable them. ' : 'Enable them. '}
            </span>
          </div>
          <div>
            <p>
              You win the game if your opponent cannot do any moves and you have more pieces than them. In each round, you can move one of your checkers forward to a neighbouring empty black square. If this square is occupied by your opponent but the next square in this direction is free, then you can jump to the free square whilst your opponent will lose their checker. After a jump, you can perform another jump in the same round. If you reach the last row with a checker, it will be crowned and from next round you can also move and jump backwards with it. When a checker jumps over a crowned checker, it will take over the crown. The same rules apply to both players. The player with the brown checkers starts.
            </p>
          </div>
          <div>
            <p>
              You can choose an AI for each player. The Random Moves AI will perform random, valid moves. The other AIs presume are perfect and presume that you are perfect. The Dumb AI anticipates {number[this.props.limits.dumb]} rounds, the Intermediate AI {number[this.props.limits.intermediate]} rounds, and the Smart AI {number[this.props.limits.smart]} rounds.
            </p>
          </div>
          <div>
            <p>
              This is an open-source game. You are very welcome to report bugs and to contribute.
            </p>
          </div>
          <div>
            <span onClick={() => window.open('https://github.com/davidpomerenke/checkers', '_blank')}>
              Find it on GitHub.
            </span>
          </div>
          <div>
            <span onClick={() => this.props.parentCallback('hide')}>
              Hide help.
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const number = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' }
