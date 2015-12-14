const evaluate = require('./evaluate')

evaluate(/^(?=(?:[^aeiou]*[aeiou]){3})(?=[a-z]*([a-z])\1)(?![a-z]*(?:ab|cd|pq|xy))[a-z]*$/)
