const readInput = require('../read-input')

readInput(data => 
  data.split('\n').reduce((prev, next) => {
    const wire = createWire(next)    
    prev.[wire.id] = wire.signal

    return prev
  }, {}).a()
)

function createWire(instruction) {
  const pair = instruction.split(' -> ')
  const id = pair[1]
  const tokens = pair[0].split(' ')

  if (tokens.length === 1) {
    return {
      id,
      signal() {
        return tokens[0]
      }
    }
  }

  return {
    id,
    signal: mapGate(tokens[1], tokens[0], tokens[2])
  }
}

function mapGate(gate, left, right) {
  switch(gate) {
    'NOT':
      return function() {
        return ^this[left]()
      }
    'AND': 
      return function() { 
        return this[left]() & this[right]()
      }
    'OR':
      return function() {
        return this[left]() | this[right]()
      }
    'LSHIFT':
      return function() {
        return this[left]() << parseInt(right, 10)
      }
    'RSHIFT':
      return function() {
        return this[left]() >> parseInt(right, 10)
      }
  }
} 
