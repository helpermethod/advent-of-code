'use strict'

const readInput = require('../read-input')
const argv = require('yargs').default('n', 1).argv

readInput(data => {
  const coords = Array.from(new Array(argv.n), () => [0, 0])

  return data.split('').reduce((prev, curr, i) => {
    const coord = coords[i % coords.length]

    switch(curr) {
      case '<':
        coord[0]--
        break
      case '^':
        coord[1]--
        break
      case '>':
        coord[0]++
        break
      case 'v':
        coord[1]++
    }

    return prev.add(`${coord[0]}-${coord[1]}`)
  }, new Set(['0-0'])).size
})
