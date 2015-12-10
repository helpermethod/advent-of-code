'use strict'

const floor = require('./floor')

floor((l, w, h) => Math.min(l + w, w + h, l + h) * 2 + (l * w * h))
