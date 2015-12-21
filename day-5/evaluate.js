'use strict'

const readInput = require('../read-input')

module.exports = regex => readInput(data => data.split('\n').reduce((prev, curr) => regex.test(curr) ? prev + 1 : prev, 0))
