import { sum, average, median, isEven } from './stats.js';
import { test, expect } from '@jest/globals';

// test untuk sum pada stats.js
test('sum([1, 2, 3]) returns 6', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

test('sum([]) returns 0', () => {
    expect(sum([])).toBe(0);
});

test('sum([-1,-2]) returns -3', () => {
    expect(sum([-1, -2])).toBe(-3);
});

// test untuk average pada stats.js
test('average([1, 2, 3]) returns 2', () => {
    expect(average([1, 2, 3])).toBe(2);
})

test('average([]) returns NaN', () => {
    expect(average([])).toBeNaN();
})

test('average([1, 2, 4]) returns 2.333', () => {
    expect(average([1, 2, 4])).toBeCloseTo(2.333);
})

// test untuk median pada stats.js
test('median([1, 2, 3]) returns 2', () => {
    expect(median([1, 2, 3])).toBe(2);
})

test('median([]) returns NaN', () => {
    expect(median([])).toBeNaN();
})

test('median([1, 2, 3,4]) returns 2', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
})