
const classContainer = require('./calculator.js')

describe('The Sum', () => {
    test('First', () => {
        expect(classContainer.add(5,3)).toBe(8)
    })
    test('Second', () => {
        expect(classContainer.add(10,3)).toBe(13)
    })
    test('Third', () => {
        expect(classContainer.add(50,3)).toBe(53)
    })
})

describe('The Substractions', () => {
    test('First', () => {
        expect(classContainer.substract(5,3)).toBe(2)
    })
    test('Second', () => {
        expect(classContainer.substract(10,3)).toBe(7)
    })
    test('Third', () => {
        expect(classContainer.substract(50,3)).toBe(47)
    })
})

describe('The Multiplication', () => {
    test('First', () => {
        expect(classContainer.multiply(5,3)).toBe(15)
    })
    test('Second', () => {
        expect(classContainer.multiply(10,3)).toBe(30)
    })
    test('Third', () => {
        expect(classContainer.multiply(50,3)).toBe(150)
    })
})

describe('The Division', () => {
    test('First', () => {
        expect(classContainer.divide(9,3)).toBe(3)
    })
    test('Second', () => {
        expect(classContainer.divide(10,5)).toBe(2)
    })
    test('Third', () => {
        expect(classContainer.divide(50,5)).toBe(10)
    })
})