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
  actions: state => state[state.player].flatMap(([y, x, royal]) => [
    ...move(state, [y, x], +1, +1),
    ...move(state, [y, x], +1, -1),
    ...jump(state, [y, x], +1, +1),
    ...jump(state, [y, x], +1, -1),
    ...royal ? [...move(state, [y, x], -1, +1)] : [],
    ...royal ? [...move(state, [y, x], -1, -1)] : [],
    ...royal ? [...jump(state, [y, x], -1, +1)] : [],
    ...royal ? [...jump(state, [y, x], -1, +1)] : []
  ]),
  result: (state, [moveType, startPoint, endPoint]) => ({
    [state.player]: [
      ...state[state.player].filter(pos => !eq(pos, startPoint)),
      endPoint
    ],
    [state.opponent]: state[state.opponent].filter(pos =>
      moveType !== 'jump' ||
      !eq(pos, intermediate(startPoint, endPoint))
    ),
    player: state.opponent,
    opponent: state.player
  }),
  terminalTest: state =>
    state.p.length === 0 ||
    state.q.length === 0 ||
    checkers.actions(state).length === 0,
  utility: state => state.p.length - state.q.length,
  heuristic: state => state.p.length - state.q.length
})

const move = (state, startPoint, forward, sideward) =>
  onBoard(endPoint(state, startPoint, forward, sideward)) &&
    !occupied(state, endPoint(state, startPoint, forward, sideward))
    ? [['move', startPoint, endPoint(state, startPoint, forward, sideward)]]
    : []

const jump = (state, startPoint, forward, sideward) =>
  onBoard(endPoint(state, startPoint, forward, sideward, 2)) &&
    !occupied(state, endPoint(state, startPoint, forward, sideward, 2)) &&
    occupiedBy(state, endPoint(state, startPoint, forward, sideward), state.opponent)
    ? [['jump', startPoint, endPoint(state, startPoint, forward, sideward, 2)]]
    : []

const endPoint = (state, [y, x, royal], forward, sideward, steps = 1) =>
  [y + forward * direction(state) * steps, x + sideward * steps, royal]

const onBoard = ([y, x]) => y >= 0 && y <= 7 && x >= 0 && x <= 7

const occupiedBy = (state, posA, player) =>
  state[player].some(posB => eq(posA, posB))

const occupied = (state, pos) =>
  ['p', 'q'].some(p => occupiedBy(state, pos, p))

const eq = ([y1, x1], [y2, x2]) => y1 === y2 && x1 === x2

const direction = state => state.player === 'p' ? +1 : -1

const intermediate = ([y1, x1], [y2, x2]) => [(y1 + y2) / 2, (x1 + x2) / 2]
