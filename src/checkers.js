import { Game } from 'aima'

export const checkers = new Game({
  initialState: {
    p: [
      [0, 0, false], [0, 2, false], [0, 4, false], [0, 6, false],
      [1, 1, false], [1, 3, false], [1, 5, false], [1, 7, false],
      [2, 0, false], [2, 2, false], [2, 4, false], [2, 6, false]
    ],
    q: [
      [5, 1, false], [5, 3, false], [5, 5, false], [5, 7, false],
      [6, 0, false], [6, 2, false], [6, 4, false], [6, 6, false],
      [7, 1, false], [7, 3, false], [7, 5, false], [7, 7, false]
    ],
    player: 'p',
    opponent: 'q'
  },
  player: state => state.player,
  actions: state => state[state.player].flatMap(([y, x, royal]) =>
    directions(royal).flatMap(direction => [
      ...move(state, [y, x, royal], direction),
      ...jump(state, [y, x, royal], direction)
    ]
    )),
  result: (state, action) => recursiveResult(state, action, true),
  terminalTest: state =>
    state.p.length === 0 ||
    state.q.length === 0 ||
    checkers.actions(state).length === 0,
  utility: state => state.p.length - state.q.length,
  heuristic: state => state.p.length - state.q.length
})

const move = (state, startPoint, direction) =>
  onBoard(endPoint(state, startPoint, direction)) &&
    !occupied(state, endPoint(state, startPoint, direction))
    ? [[startPoint, endPoint(state, startPoint, direction)]]
    : []

const jump = (state, [y, x, royal], direction, prev = []) =>
  onBoard(endPoint(state, [y, x], direction, 2)) &&
    !occupied(state, endPoint(state, [y, x], direction, 2)) &&
    occupiedBy(state, endPoint(state, [y, x], direction), state.opponent)
    ? [
      [...prev, [y, x, royal], endPoint(state, [y, x, royal], direction, 2)],
      ...directions(royal).flatMap(direction2 =>
        jump(
          prev.length === 1 ? state : checkers._result(state, prev),
          endPoint(state, [y, x, royal], direction, 2),
          direction2,
          [...prev, [y, x, royal]]
        )
      )
    ]
    : []

const endPoint = (state, [y, x, royal], [forward, sideward], steps = 1) =>
  [y + forward * playerDirection(state) * steps, x + sideward * steps, royal]

const onBoard = ([y, x]) => y >= 0 && y <= 7 && x >= 0 && x <= 7

const occupied = (state, pos) =>
  ['p', 'q'].some(p => occupiedBy(state, pos, p))

const occupiedBy = (state, posA, player) =>
  state[player].some(posB => eq(posA, posB))

const playerDirection = state => state.player === 'p' ? +1 : -1

const eq = ([y1, x1], [y2, x2]) => y1 === y2 && x1 === x2

const directions = royal => [[+1, -1], [+1, +1], ...royal ? [[-1, -1], [-1, +1]] : []]

const recursiveResult = (state, action, nextPlayer = false) =>
  action.length >= 2
    ? stepResult(
      recursiveResult(state, action.slice(0, action.length - 1)),
      action[action.length - 2],
      action[action.length - 1],
      nextPlayer
    )
    : state

const stepResult = (state, startPoint, endPoint, nextPlayer) => ({
  [state.player]: [
    ...state[state.player].filter(pos => !eq(pos, startPoint)),
    endPoint
  ],
  [state.opponent]: state[state.opponent].filter(pos =>
    dist(startPoint, endPoint) === 1 ||
    !eq(pos, intermediate(startPoint, endPoint))
  ),
  player: nextPlayer ? state.opponent : state.player,
  opponent: nextPlayer ? state.player : state.opponent
})

const dist = ([y1, x1], [y2, x2]) => Math.abs(y2 - y1) / 2 + Math.abs(x2 - x1) / 2

const intermediate = ([y1, x1], [y2, x2]) => [(y1 + y2) / 2, (x1 + x2) / 2]
