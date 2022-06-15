// // Fizz Buzz is a very simple programming task, asked in software developer job interviews.
// // A typical round of Fizz Buzz can be:
// // Write a program that prints the numbers from 1 to 100 and
// // for multiples of '3' print “Fizz” instead of the number and for the multiples of '5' print “Buzz”.
// // for multiples of '15' print “FizzBuzz” instead of the number and for the multiples of '5' print “Buzz”.
//

const fizzbuzz = (number) => {
    if (number < 0) {
        throw new Error('Number should be >= 0')
    }
    if (typeof number !== 'number') {
        throw new Error(`Argument should be a number, but was ${typeof number}`);
    }

    const result = [];
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
            console.log("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
            console.log("Buzz");
        } else {
            result.push(''+i);
            console.log('' + i);
        }
    }
    return result;
}

module.exports = fizzbuzz;
