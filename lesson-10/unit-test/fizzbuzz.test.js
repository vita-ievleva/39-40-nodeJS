const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    test('Should throw Error if agr <=0', () => {
        expect(() => fizzbuzz(-1)).toThrow('Number should be >= 0')
    });

    test('Should throw Error id arg is not a number', () => {
        expect(() => fizzbuzz('number')).toThrow('Argument should be a number, but was string')
        expect(() => fizzbuzz([1])).toThrow('Argument should be a number, but was object')
        expect(() => fizzbuzz({})).toThrow('Argument should be a number, but was object')
        expect(() => fizzbuzz(null)).toThrow('Argument should be a number, but was object')
    });

    test('Should work correctly with number', () => {
        const result = fizzbuzz(16);
        expect(result).toStrictEqual([
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz",
            "16"
        ]);
    });
})
