'use strict'

const readInput = require('../read-input')

module.exports = lights =>
  readInput(data => 
    data.split('\n').reduce((prev, curr) => {
      const tokens = /^(turn (?:on|off)|toggle) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)$/.exec(curr).slice(1)
      const op = tokens[0]
      const x1 = parseInt(tokens[1], 10)
      const y1 = parseInt(tokens[2], 10)
      const x2 = parseInt(tokens[3], 10)
      const y2 = parseInt(tokens[4], 10)

      for (let i of range(x1, x2 + 1)) {
        for (let j of range(y1, y2 + 1)) {
          prev[op](i, j)
        }
      }

      return prev
    }, lights).coords.reduce((prev, curr) => {
      return prev + curr.reduce((prev, curr) => prev + curr)
    }, 0))

function* range(n, m) {
  for (let i = n; i < m; i++) {
    yield i
  }
}
