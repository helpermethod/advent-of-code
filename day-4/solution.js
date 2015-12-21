'use strict'

const crypto = require('crypto')
const argv = require('yargs').default('p', '00000').string('p').argv

for (const n of naturals()) {
  if (crypto.createHash('md5').update(`ckczppom${d}`).digest('hex').startsWith(argv.p)) {
    console.log(n)
    process.exit()
  }
}

function* naturals() {
  for (let i = 1;; i++) {
    yield i
  }
}
