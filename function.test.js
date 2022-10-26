const { returnTwo, greeting, add, multiply, divide, substract } = require('./functions')

describe('function returnTwo', () => {
    test('equal', () => expect(returnTwo()).toBe(2))
})

describe('function greeting', () => {
    test('hello, james should equal hello, james', () => expect(greeting('James')).toBe('Hello, James'))

    test('hello Jill', () => expect(greeting('Jill')).toBe('Hello, Jill'))
})

describe('function add', () => {
    test('1+2 = 3', () => expect(add(1,2)).toBe(1+2))
    test('9+5 = 14', () => expect(add(9,5)).toBe(5+9))
})

describe('Math function', () => {
    describe('multiply', () => {
        test(' 5 * 10 = 10', () => expect(multiply(5, 10)).toBe(50))
    })
})