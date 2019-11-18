// cf. https://github.com/aimacode/aima-pseudocode/blob/master/md/Alpha-Beta-Search.md

export const alphaBetaSearch = (game, state, limit) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: minValue(game, game.result(state, action), limit - 1, -Infinity, +Infinity)
    }))
    .reduce((current, next) => next.outcome > current.outcome ? next : current)

export const betaAlphaSearch = (game, state, limit) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: maxValue(game, game.result(state, action), limit - 1, -Infinity, +Infinity)
    }))
    .reduce((current, next) => next.outcome < current.outcome ? next : current)

const maxValue = (game, state, limit, alpha, beta) => {
  if (game.terminalTest(state)) return game.utility(state)
  if (limit < 1) return game.heuristic(state)
  let v = -Infinity
  for (const action of game.actions(state)) {
    v = Math.max(v, minValue(game, game.result(state, action), limit, alpha, beta))
    if (v >= beta) return v
    alpha = Math.max(alpha, v)
  }
  return v
}

const minValue = (game, state, limit, alpha, beta) => {
  if (game.terminalTest(state)) return game.utility(state)
  if (limit < 1) return game.heuristic(state)
  let v = +Infinity
  for (const action of game.actions(state)) {
    v = Math.min(v, maxValue(game, game.result(state, action), limit, alpha, beta))
    if (v <= alpha) return v
    beta = Math.min(beta, v)
  }
  return v
}
