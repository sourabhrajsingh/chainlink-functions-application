// Parse the array of numbers from the args
const numbers = args.map(Number); // Assume args is an array of numbers passed from the contract

// Calculate the mean (average) of the numbers
const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

// Calculate the sum of the squared differences from the mean
const squaredDiffs = numbers.map((num) => Math.pow(num - mean, 2));

// Calculate the variance
const variance =
  squaredDiffs.reduce((acc, diff) => acc + diff, 0) / numbers.length;

// Calculate the standard deviation (square root of variance)
const standardDeviation = Math.sqrt(variance);

// Return the standard deviation rounded and encoded as a uint256 for Solidity
return Functions.encodeUint256(Math.round(standardDeviation * 100)); // Multiplied by 100 to preserve precision
