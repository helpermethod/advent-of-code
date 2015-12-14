const readInput = require('../read-input')

module.exports = cb => {
  readInput(data => data.split('\n').reduce((prev, curr) => {
    const dimensions = curr.split('x')

    return prev + cb(parseInt(dimensions[0], 10), parseInt(dimensions[1], 10), parseInt(dimensions[2], 10))
  }, 0))
}
