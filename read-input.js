const readFile = require('bluebird').promisify(require('fs').readFile)

module.exports = (cb) => 
  readFile('input.txt', 'utf-8')
    .then(cb)
    .then(console.log.bind(console))
    .catch((e) => {
      console.error(e.message)
    })
