'use strict'

const readInput = require('../read-input')

readInput(data => data.split('').reduce((prev, curr) => prev + (curr === '(' ? 1 : -1), 0))
