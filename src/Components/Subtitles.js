import React from 'react'
import { checkers } from '../aima/checkers'
import ErrorMessage from './ErrorMessage'

export default class Subtitles extends React.Component {
  render () {
    return (
      <div className='subtitles'>
        {this.props.error.length > 0 && (
          <ErrorMessage error={this.props.error} />
        )}
        {this.props.ai.p === undefined && (
          <WelcomeMessage p='p' parentCallback={type => this.props.parentCallback('p', type)} />
        )}
        {this.props.ai.p !== undefined && this.props.ai.q === undefined && (
          <WelcomeMessage p='q' parentCallback={type => this.props.parentCallback('q', type)} />
        )}
        {checkers.terminalTest(this.props.state) && (
          <CongratulationMessage state={this.props.state} />
        )}
      </div>
    )
  }
}

class WelcomeMessage extends React.Component {
  render () {
    return (
      <div className='ai-select'>
        <div>
          <p>
            {this.props.p === 'p' ? 'Brown starts.' : 'Beige is next.'}
          </p>
        </div>
        <div>
          <span>
            Read the rules.
          </span>
        </div>
        <br />
        <div>
          <p>
            Select an AI for the brown side:
          </p>
        </div>
        <div>
          <span onClick={() => this.props.parentCallback('random')}>
            Random Moves AI
          </span>
        </div>
        <div>
          <span onClick={() => this.props.parentCallback('dumb')}>
            Dumb AI
          </span>
        </div>
        <div>
          <span onClick={() => this.props.parentCallback('intermediate')}>
            Intermediate AI
          </span>
        </div>
        <div>
          <span onClick={() => this.props.parentCallback('smart')}>
            Smart AI
          </span>
        </div>
      </div>
    )
  }
}

export class CongratulationMessage extends React.Component {
  render () {
    return (
      <p>
        {checkers.heuristic(this.props.state) > 0 ? 'Brown' : 'Beige'} wins.
        Congratulations! <br />
        Doubleclick to play again.
      </p>
    )
  }
}
