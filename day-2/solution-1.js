'use strict'

const floor = require('./floor')

floor((l, w, h) => (2 * l * w + 2 * w * h + 2 * h * l) + Math.min(l * w, w * h, h * l))
