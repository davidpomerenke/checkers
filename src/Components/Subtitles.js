import React from 'react'

export default class Subtitles extends React.Component {
  render () {
    return (
      <div className='subtitles'>
        {this.props.message !== '' && (
          <p>
            {this.props.message}
            <br />
          </p>
        )}
        {this.props.pai === undefined && (
          <WelcomeMessage p='p' parentCallback={type => this.props.parentCallback('p', type)} />
        )}
        {this.props.pai !== undefined && this.props.qai === undefined && (
          <WelcomeMessage p='q' parentCallback={type => this.props.parentCallback('q', type)} />
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
