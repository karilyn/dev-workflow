/*
Write a Node program that takes in an unlimited number of command Line arguments,
goes through each and prints out the sum of them.
If any argument is NOT a whole number, skip it.
It does not support negative numbers.
if (number < 0) {
  console.log('Error')
}
If any argument is not a number, output an error message.
if (typeof number !== 'number') {
  console.log('Error').
}
We need at least two arguments.
*/
// problem 1. How do we take in an unlimited number of command line arguments?
const commandLineArguments = process.argv;
//i want to create a new array where we don't pass the first two command line arguments
const argumentsArray = commandLineArguments.slice(2);
//we need at least two arguments
if (argumentsArray.length < 2) {
  throw Error("You must input at least two arguments to sum");
}
//console.log(commandLineArguments);
// prolem 2. how can we go through each one of thoe command line arguments?
let sum = 0;
/*


*/
for (let i = 0; i < argumentsArray.length; i++) {
  const argument = argumentsArray[i];
  const number = Number(argument)
  if (number < 0) {
    throw Error("Only positive numbers, please");
  }
  if (isNaN(number) || typeof number !== 'number') {
    throw Error ('Error. You must input only numbers')
  }
  if (number - Math.floor(number) === 0) {
    sum += number;
  }
}
// problem 3? How can we print the sum of them?
console.log("sum result: ", sum);
