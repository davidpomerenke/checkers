import React from 'react'
import { checkers } from '../aima/checkers'
import HelpMessage from './HelpMessage'
import ErrorMessage from './ErrorMessage'

export default class Subtitles extends React.Component {
  constructor () {
    super()
    this.state = { help: false }
  }

  render () {
    return (
      <div className={'subtitles' + (!this.state.help ? ' marginal' : '')}>
        {this.state.help && (
          <HelpMessage
            highlights={this.props.highlights}
            limits={this.props.limits}
            parentCallback={action =>
              action === 'hide'
                ? this.setState({ help: false })
                : this.props.parentCallback({ highlights: !this.props.highlights })}
          />
        )}
        {this.props.error.length > 0 && !this.state.help && (
          <ErrorMessage
            error={this.props.error}
            parentCallback={type => this.setState({ help: true })}
          />
        )}
        {this.props.ai.p === undefined && !this.state.help && (
          <WelcomeMessage
            p='p'
            parentCallback={type =>
              type === 'help'
                ? this.setState({ help: true })
                : this.props.parentCallback({ ai: ['p', type] })}
            error={this.props.error}
          />
        )}
        {this.props.ai.p !== undefined && this.props.ai.q === undefined && !this.state.help && (
          <WelcomeMessage
            p='q'
            parentCallback={type =>
              type === 'help'
                ? this.setState({ help: true })
                : this.props.parentCallback({ ai: ['q', type] })}
            error={this.props.error}
          />
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
      <div>
        {this.props.error.length === 0 && (
          <div>
            <div>
              <p>
                {this.props.p === 'p' ? 'Brown starts.' : 'Beige is next.'}
              </p>
            </div>
            <div>
              <span onClick={() => this.props.parentCallback('help')}>
                Read the rules.
              </span>
            </div>
          </div>
        )}
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
      <div>
        <p>
          {checkers.heuristic(this.props.state) > 0 ? 'Brown' : 'Beige'} wins.
          Congratulations! <br />
          Reload to play again.
        </p>
      </div>
    )
  }
}
