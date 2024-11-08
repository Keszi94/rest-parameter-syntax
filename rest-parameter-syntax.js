/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */


// __~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~  Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum: ", sum);

// __~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~  Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum2: ", sum2);


// __~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~__~~  Function using ...rest
const sumRest = ( a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3: ", sum3);
