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
  result: (state, action) => 'todo',
  terminalTest: state =>
    state.p.length === 0 ||
    state.q.length === 0 ||
    checkers.actions(state).length === 0,
  utility: state => state.p.length - state.q.length,
  heuristic: state => state.p.length - state.q.length
})

const move = (state, startPoint, forward, sideward) =>
  !occupied(state, endPoint(state, startPoint, forward, sideward))
    ? [['move', startPoint, endPoint(state, startPoint, forward, sideward)]]
    : []

const jump = (state, [y, x], forward, sideward) => []

const endPoint = (state, [y, x], forward, sideward) =>
  [y + forward * direction(state), x + sideward]

const occupied = (state, [y, x]) =>
  !['p', 'q'].some(p => state[p].some(([yy, xx]) => yy === y && xx === x))

const direction = state => state.player === 'p' ? +1 : -1
