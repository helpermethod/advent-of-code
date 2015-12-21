'use strict'

const evaluate = require('./evaluate')

evaluate(/^(?=[a-z]*([a-z]{2})[a-z]*\1)(?=[a-z]*([a-z])[a-z]\2)[a-z]*$/)
