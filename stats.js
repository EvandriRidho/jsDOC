/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of all numbers in the array.
 */
function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
}

/**
 * Calculates the average value of an array of numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number | NaN} The average value or NaN if the array is empty.
 */
export function average(nums) {
    if (nums.length === 0) {
        return NaN;
    }
    return sum(nums) / nums.length;
}

/**
 * Calculates the median value of an array of numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number | NaN} The median value or NaN if the array is empty.
 */
export function median(nums) {
    if (nums.length === 0) {
        return NaN;
    }

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return isEven(sorted.length)
        ? (sorted[mid] + sorted[mid - 1]) / 2
        : sorted[mid];
}

/**
 * Checks whether a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, otherwise false.
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * A constant representing the value of Pi (π).
 * @type {number}
 * @default
 */
export const pi = 3.14159;
