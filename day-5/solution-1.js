const readInput = require('../read-input.js')

readInput(data => data.split('\n').reduce((prev, curr) => /^(?=(?:.*[aeiou]){3})(?=.*([a-z])\1)(?!.*(?:ab|cd|pq|xy)).*$/.test(curr) ? prev + 1 : prev, 0))
