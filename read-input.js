const fs = require('fs')

module.exports = (cb) => new Promise((resolve, reject) => {
  fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
      return reject(err)
    }

    return resolve(data)
  })
}).then(cb)
  .then(console.log)
  .catch(e => console.error(e.message))
