
const capLetter = require('./cap')

test('Should be a cap letter', () => {
    expect(capLetter('hello')).toBe('Hello')
})