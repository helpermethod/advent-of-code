'use strict'

const readInput = require('../read-input')

function index(chars, floor, i) {
  if (floor === -1) {
    return i
  }

  return index(chars.slice(1), floor + (chars[0] === '(' ? 1 : -1), i + 1)
}

readInput(data => index(data, 0, 0))
