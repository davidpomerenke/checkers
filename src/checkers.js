import { Game } from 'aima'

export const checkers = new Game({
  initialState: {
    p: [
      [0, 0], [0, 2], [0, 4], [0, 6],
      [1, 1], [1, 3], [1, 5], [1, 7],
      [2, 0], [2, 2], [2, 4], [2, 6]
    ],
    q: [
      [5, 1], [5, 3], [5, 5], [5, 7],
      [6, 0], [6, 2], [6, 4], [6, 6],
      [7, 1], [7, 3], [7, 5], [7, 7]
    ],
    player: 'p',
    opponent: 'q'
  },
  player: state => state.player,
  actions: state => [
    [0, 0]
  ],
  result: (state, action) => 'todo',
  terminalTest: state =>
    state.p.length === 0 ||
    state.q.length === 0 ||
    checkers.actions(state).length === 0,
  utility: state => state.p.length - state.q.length,
  heuristic: state => state.p.length - state.q.length
})
