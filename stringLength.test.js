
const stringLength = require('./stringLength')

test('Testing strings',() => {
    expect(stringLength('Hello')).toBe(5)
    expect(stringLength('hellotest')).toBeLessThan(11)
    expect(stringLength('h')).toBeGreaterThan(0)
})