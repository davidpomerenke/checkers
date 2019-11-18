export const minimaxDecision = (game, state, limit) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: minValue(game, game.result(state, action), limit - 1)
    }))
    .reduce((current, next) => next.outcome > current.outcome ? next : current)

export const maximinDecision = (game, state, limit) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: maxValue(game, game.result(state, action), limit - 1)
    }))
    .reduce((current, next) => next.outcome < current.outcome ? next : current)

const maxValue = (game, state, limit) =>
  game.terminalTest(state)
    ? game.utility(state)
    : limit < 1
      ? game.heuristic(state)
      : game.actions(state).reduce((prev, current) =>
        Math.max(prev, minValue(game, game.result(state, current), limit - 1)), -Infinity)

const minValue = (game, state, limit) =>
  game.terminalTest(state)
    ? game.utility(state)
    : limit < 1
      ? game.heuristic(state)
      : game.actions(state).reduce((prev, current) =>
        Math.min(prev, maxValue(game, game.result(state, current), limit - 1)), Infinity)
