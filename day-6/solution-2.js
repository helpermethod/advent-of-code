'use strict'

const setup = require('./setup')

setup({
  coords: Array.from(new Array(1000), () => new Array(1000).fill(0)),
  'turn on': function(x, y) {
    this.coords[x][y] += 1
  },
  'turn off': function(x, y) {
    this.coords[x][y] = Math.max(this.coords[x][y] - 1, 0)
  },
  toggle: function(x, y) {
    this.coords[x][y] = this.coords[x][y] + 2
  }
})
